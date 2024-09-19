import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from './components/layouts/navbar';
import '../styles/globals.css';

const inter = Poppins({ weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Pasar Knitto',
  description: 'Jual beli jajan dan barang di Pasar Knitto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />

            <div className="pt-10">
              <div className="bg-background">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
