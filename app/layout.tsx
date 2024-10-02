import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from './components/layouts/navbar';
import '../styles/globals.css';
import { customMetaDataGenerator } from '@/lib/utils';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = customMetaDataGenerator({
  title: 'Pasar Knitto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
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
