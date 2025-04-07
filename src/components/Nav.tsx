import MobileNav from './MobileNav';
import NavLink from './NavLink';

export default function Nav() {
    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex items-center justify-center gap-4 bg-white justify-self-center shadow-lg rounded-xl px-8 py-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/books">Books</NavLink>
                    <NavLink href="/articles">Articles</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                </ul>
            </nav>
            <MobileNav />
        </>
    );
}
