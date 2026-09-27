-- ====================================================================
-- SUPABASE SCHEMA FOR PORTFOLIO: อภิณัฐชรัชน์ มณีรัตน์ (Arm)
-- มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น
-- คณะครุศาสตร์อุตสาหกรรม สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า
-- ====================================================================

-- 1. สร้างตารางเก็บข้อมูลพอร์ตโฟลิโอ (JSONB Document Model)
CREATE TABLE IF NOT EXISTS public.portfolio_data (
  id TEXT PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. เปิดใช้งาน Row Level Security (RLS)
ALTER TABLE public.portfolio_data ENABLE ROW LEVEL SECURITY;

-- 3. นโยบายการอ่าน (ทุกคนสามารถเข้าชมพอร์ตโฟลิโอได้)
DROP POLICY IF EXISTS "Public can view portfolio data" ON public.portfolio_data;
CREATE POLICY "Public can view portfolio data"
  ON public.portfolio_data
  FOR SELECT
  USING (true);

-- 4. นโยบายการแก้ไข (อนุญาตให้อัปเดตและบันทึกข้อมูล)
DROP POLICY IF EXISTS "Allow updates to portfolio data" ON public.portfolio_data;
CREATE POLICY "Allow updates to portfolio data"
  ON public.portfolio_data
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 5. สร้าง Storage Bucket สำหรับเก็บไฟล์มีเดีย (รูป วิดีโอ ฟอนต์ เอกสาร)
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-media', 'portfolio-media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 6. นโยบาย Storage สำหรับอ่านไฟล์แบบสาธารณะ
DROP POLICY IF EXISTS "Public can view portfolio media" ON storage.objects;
CREATE POLICY "Public can view portfolio media"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'portfolio-media');

-- 7. นโยบาย Storage สำหรับการอัปโหลดไฟล์
DROP POLICY IF EXISTS "Allow uploads to portfolio media" ON storage.objects;
CREATE POLICY "Allow uploads to portfolio media"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'portfolio-media');

DROP POLICY IF EXISTS "Allow updates to portfolio media" ON storage.objects;
CREATE POLICY "Allow updates to portfolio media"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'portfolio-media');

DROP POLICY IF EXISTS "Allow deletes to portfolio media" ON storage.objects;
CREATE POLICY "Allow deletes to portfolio media"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'portfolio-media');

-- ====================================================================
-- คำแนะนำ: คัดลอกสคริปต์นี้ไปวางในเมนู SQL Editor ในหน้าแดชบอร์ด Supabase
-- แล้วกด RUN เพื่อเปิดใช้งานฐานข้อมูลและพื้นที่เก็บไฟล์สำหรับพอร์ตโฟลิโอ
-- ====================================================================
