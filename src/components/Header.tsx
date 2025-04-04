import logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <header className="bg-sky-100 p-2 border-b border-zinc-200 shadow grid grid-cols-[1fr_auto] md:grid-cols-[300px_1fr_300px] items-center">
            <Link href="/" className="flex items-center gap-2">
                <div>
                    <Image
                        src={logo}
                        alt="Joe Attardi"
                        height={48}
                        className="-rotate-3 hover:scale-105 hover:saturate-150 hover:-rotate-6 transition-all shadow-lg rounded-lg"
                    />
                </div>
            </Link>
            <Nav />
        </header>
    );
}
