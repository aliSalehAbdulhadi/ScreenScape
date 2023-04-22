import { Roboto } from 'next/font/google';
import { Averia_Serif_Libre } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/Navbar/Navbar';


const Navbar = dynamic(() => import('@/src/components/Navbar/Navbar'));
const Footer = dynamic(() => import('@/src/components/Footer/Footer'));


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
        className={`${roboto.className} ${roboto.variable} ${averia.variable} flex flex-col  bg-primary  select-none`}
      >

        <Suspense
          fallback={<div className="bgFadeInEnter w-full h-[7vh]"></div>}
        >

          <Navbar />
          
        {children}
        <Suspense>
          <div className="self-center">
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
