import { Header } from '@/components/Header';
import './globals.css';
import { Raleway } from 'next/font/google';
import { Footer } from '@/components/Footer';

const inter = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'PageSpeed.sh',
  description:
    'Website that allows you to discover the performance of your website according to google (Crux Api).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} dark:bg-black bg-slate-200`}>
        <main className="containerFluid mt-8">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
