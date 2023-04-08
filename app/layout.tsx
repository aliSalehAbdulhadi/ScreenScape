import './globals.css';
import { Roboto } from 'next/font/google';
import { Averia_Serif_Libre } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const averia = Averia_Serif_Libre({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-averia',
});

export const metadata = {
  title: 'ScreenScape',
  description: 'ScreenScape. All in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${roboto.variable} ${averia.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
