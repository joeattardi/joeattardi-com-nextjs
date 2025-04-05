'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = href === '/' 
        ? pathname === '/'
        : pathname?.startsWith(href);
    
    return (
        <li>
            <Link 
                className={`block px-4 py-1 rounded-lg font-bold transition-all ${
                    isActive 
                        ? 'bg-slate-200 hover:bg-slate-300' 
                        : 'hover:bg-slate-100 hover:scale-105'
                }`}
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}
