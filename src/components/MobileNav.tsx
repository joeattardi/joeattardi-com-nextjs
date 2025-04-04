'use client';
import logo from '@/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <>
            <button className="md:hidden text-3xl" onClick={() => setIsOpen(true)}>
                <PiList />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="bg-slate-300 h-screen w-screen fixed top-0 right-0 z-50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, type: 'spring', delay: 0.25 }}
                    >
                        <button
                            className="text-3xl absolute top-4 right-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <PiX />
                        </button>
                        <div className="p-2"><Image src={logo} alt="logo" height={48} className="-rotate-3" /></div>
                        <ul className="flex flex-col gap-4 m-4">
                            <MobileNavItem href="/" onClick={handleClose}>Home</MobileNavItem>
                            <MobileNavItem href="/books" onClick={handleClose}>Books</MobileNavItem>
                            <MobileNavItem href="/articles" onClick={handleClose}>Articles</MobileNavItem>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function MobileNavItem({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) {
    return (
        <Link href={href} className="text-3xl font-bold" onClick={onClick}>{children}</Link>
    );
}