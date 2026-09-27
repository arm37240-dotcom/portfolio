import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'อภิณัฐชรัชน์ มณีรัตน์ | Portfolio ครุศาสตร์อุตสาหกรรมไฟฟ้า มทร.อีสาน ขอนแก่น',
  description: 'แฟ้มสะสมผลงาน (Electronic Portfolio) นาย อภิณัฐชรัชน์ มณีรัตน์ รหัสนักศึกษา 68322110246-5 คณะครุศาสตร์อุตสาหกรรม สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
  keywords: [
    'อภิณัฐชรัชน์ มณีรัตน์',
    'อภิณัฐชรัชน์',
    'พอร์ตโฟลิโอ',
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
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-[#040810] text-[#f1f5f9] antialiased">
        {children}
      </body>
    </html>
  );
}
