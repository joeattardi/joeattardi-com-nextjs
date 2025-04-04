import logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-zinc-50 p-2 border-b border-zinc-200 shadow">
            <Link href="/" className="flex items-center gap-2">
                <Image src={logo} alt="Joe Attardi" height={48} className="-rotate-3 hover:scale-105 hover:saturate-150 hover:-rotate-6 transition-all shadow-lg rounded-lg" />
            </Link>
        </header>
    );
}