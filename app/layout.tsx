import { ReactNode } from 'react';

export const metadata = {
  title: 'BTE Demo Starter',
  description: 'Modern catalog, quote workflow, and ecommerce starter for BTE.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:'Arial, Helvetica, sans-serif', background:'#f8fafc', color:'#0f172a'}}>{children}</body>
    </html>
  );
}
