import { PortfolioData, UploadedFileRecord } from '@/types/portfolio';
import { initialPortfolioData } from '@/data/initialData';
import { supabase, isSupabaseConfigured } from './supabaseClient';

const LOCAL_STORAGE_KEY = 'arminat_portfolio_data_v1';

export class StorageService {
  /**
   * ตรวจสอบว่าระบบกำลังเชื่อมต่อ Cloud Supabase หรือ Local Storage
   */
  static getConnectionStatus(): { isCloud: boolean; message: string } {
    if (isSupabaseConfigured) {
      return {
        isCloud: true,
        message: 'เชื่อมต่อ Supabase Database & Storage สำเร็จ (Cloud Sync Active)'
      };
    }
    return {
      isCloud: false,
      message: 'ทำงานในโหมด Dual-Engine Local Fallback (บันทึกในเบราว์เซอร์อัตโนมัติ พร้อมซิงค์เมื่อต่อ Supabase)'
    };
  }

  /**
   * ดึงข้อมูลพอร์ตโฟลิโอทั้งหมด
   */
  static async loadPortfolioData(): Promise<PortfolioData> {
    // 1. ลองดึงจาก Supabase ก่อนถ้าเชื่อมต่อไว้
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('portfolio_data')
          .select('content')
          .eq('id', 'default')
          .maybeSingle();

        if (data && data.content && !error) {
          // ซิงค์เก็บลง LocalStorage ด้วยเป็นแคช
          if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.content));
          }
          return {
            ...initialPortfolioData,
            ...data.content,
            profile: { ...initialPortfolioData.profile, ...data.content.profile },
            themeConfig: { ...initialPortfolioData.themeConfig, ...data.content.themeConfig },
            siteTexts: { ...initialPortfolioData.siteTexts, ...data.content.siteTexts }
          } as PortfolioData;
        }
      } catch (err) {
        console.warn('Supabase fetch failed, falling back to local storage:', err);
      }
    }

    // 2. ดึงจาก LocalStorage ในเบราว์เซอร์
    if (typeof window !== 'undefined') {
      try {
        const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localData) {
          const parsed = JSON.parse(localData);
          // รวมโครงสร้างกรณีมีฟิลด์ใหม่
          return {
            ...initialPortfolioData,
            ...parsed,
            profile: { ...initialPortfolioData.profile, ...parsed.profile },
            themeConfig: { ...initialPortfolioData.themeConfig, ...parsed.themeConfig },
            siteTexts: { ...initialPortfolioData.siteTexts, ...parsed.siteTexts }
          };
        }
      } catch (err) {
        console.warn('LocalStorage parse failed, using initial data:', err);
      }
    }

    // 3. ใช้ข้อมูลเริ่มต้น
    return initialPortfolioData;
  }

  /**
   * บันทึกข้อมูลพอร์ตโฟลิโอทั้งหมด
   */
  static async savePortfolioData(data: PortfolioData): Promise<{ success: boolean; error?: string }> {
    // 1. บันทึกลง LocalStorage เสมอ เพื่อความรวดเร็วและเป็น Offline First
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch (err) {
        console.error('Failed to save to local storage:', err);
      }
    }

    // 2. ซิงค์ขึ้น Supabase ถ้ามี Cloud Connection
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('portfolio_data')
          .upsert({
            id: 'default',
            content: data,
            updated_at: new Date().toISOString()
          }, { onConflict: 'id' });

        if (error) {
          console.warn('Supabase upsert warning:', error.message);
          return { success: true, error: 'บันทึกในเบราว์เซอร์แล้ว แต่ Supabase แจ้งเตือน: ' + error.message };
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return { success: true, error: 'บันทึกในเบราว์เซอร์แล้ว (Supabase sync failed: ' + message + ')' };
      }
    }

    return { success: true };
  }

  /**
   * อัปโหลดไฟล์ (รูปภาพ วิดีโอ ฟอนต์ เอกสาร ฯลฯ)
   */
  static async uploadFile(file: File): Promise<UploadedFileRecord> {
    const fileId = 'file_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    
    // จำแนกหมวดหมู่ไฟล์
    let category: UploadedFileRecord['category'] = 'other';
    if (file.type.startsWith('image/')) category = 'image';
    else if (file.type.startsWith('video/')) category = 'video';
    else if (file.name.endsWith('.ttf') || file.name.endsWith('.woff') || file.name.endsWith('.woff2') || file.name.endsWith('.otf')) category = 'font';
    else if (file.type.includes('pdf') || file.type.includes('document') || file.name.endsWith('.docx') || file.name.endsWith('.pdf')) category = 'document';

    // 1. ถ้ามี Supabase Storage
    if (isSupabaseConfigured && supabase) {
      try {
        const storagePath = `uploads/${Date.now()}_${sanitizedName}`;
        const { data, error } = await supabase.storage
          .from('portfolio-media')
          .upload(storagePath, file, { cacheControl: '3600', upsert: true });

        if (!error && data) {
          const { data: publicData } = supabase.storage
            .from('portfolio-media')
            .getPublicUrl(storagePath);

          return {
            id: fileId,
            name: file.name,
            size: file.size,
            type: file.type || 'application/octet-stream',
            url: publicData.publicUrl,
            uploadedAt: new Date().toISOString(),
            category
          };
        }
      } catch (err) {
        console.warn('Supabase storage upload failed, falling back to local object:', err);
      }
    }

    // 2. Local Fallback: อ่านเป็น Data URL สำหรับไฟล์ขนาดเล็ก หรือ Object URL
    let fileUrl = '';
    if (file.size < 4 * 1024 * 1024) {
      // ขนาดไม่เกิน 4MB แปลงเป็น Base64 Data URL เพื่อให้คงอยู่ข้าม session
      fileUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } else {
      // ไฟล์ใหญ่ เช่น วิดีโอขนาดใหญ่ ใช้ URL.createObjectURL
      fileUrl = URL.createObjectURL(file);
    }

    return {
      id: fileId,
      name: file.name,
      size: file.size,
      type: file.type || 'application/octet-stream',
      url: fileUrl,
      uploadedAt: new Date().toISOString(),
      category
    };
  }

  /**
   * คืนค่าข้อมูลเริ่มต้น (Reset to Default)
   */
  static resetToDefault(): PortfolioData {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    return JSON.parse(JSON.stringify(initialPortfolioData));
  }
}
