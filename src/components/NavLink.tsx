import Link from 'next/link';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link className="hover:bg-slate-100 block px-4 py-1 rounded-lg font-bold hover:scale-105 transition-all"href={href}>{children}</Link>
        </li>
    );
}
