import type { Metadata } from 'next';
import { Press_Start_2P, VT323, Chakra_Petch, Geist_Mono } from 'next/font/google';
import './globals.css';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const vt323Font = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

const chakraPetch = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  variable: '--font-chakra',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HIKARI SYSTEM OS • อภิณัฐชรัชน์ มณีรัตน์ | Portfolio ครุศาสตร์อุตสาหกรรมไฟฟ้า',
  description: 'แฟ้มสะสมผลงาน (Electronic Portfolio) นาย อภิณัฐชรัชน์ มณีรัตน์ รหัสนักศึกษา 68322110246-5 คณะครุศาสตร์อุตสาหกรรม สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
  keywords: [
    'อภิณัฐชรัชน์ มณีรัตน์',
    'Aphinat Manirat',
    'Hikari System OS',
    'ครุศาสตร์อุตสาหกรรมไฟฟ้า',
    'มทร.อีสาน ขอนแก่น',
    'RMUTI KKC',
    'วิศวกรรมไฟฟ้า',
    'Portfolio'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${pixelFont.variable} ${vt323Font.variable} ${chakraPetch.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-[#060713] text-[#f1f5f9] antialiased selection:bg-pink-500/30 selection:text-pink-200">
        {children}
      </body>
    </html>
  );
}
