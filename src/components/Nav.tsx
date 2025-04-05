import NavLink from './NavLink';
import MobileNav from './MobileNav';
import { PiRss } from 'react-icons/pi';

export default function Nav() {
    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex items-center justify-center gap-4 bg-white justify-self-center shadow-lg rounded-xl px-8 py-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/books">Books</NavLink>
                    <NavLink href="/articles">Articles</NavLink>
                    <li>
                        <a 
                            href="/rss.xml" 
                            className="text-zinc-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                            title="RSS Feed"
                        >
                            <PiRss className="text-lg" />
                            <span className="sr-only">RSS Feed</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <MobileNav />
        </>
    );
}
