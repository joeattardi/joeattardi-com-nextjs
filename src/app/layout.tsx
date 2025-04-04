import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const onest = Onest({
    subsets: ['latin'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Joe Attardi',
    description: "Joe Attardi's personal website",
    icons: {
        icon: '/favicon.png'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(onest.className, 'antialiased bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen max-w-7xl flex flex-col mx-auto')}>
              <Header />
              <main className="bg-white flex-grow  shadow p-4">{children}</main>
             <Footer />
            </body>
        </html>
    );
}
