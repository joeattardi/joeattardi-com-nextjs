import NavLink from './NavLink';
import MobileNav from './MobileNav';
export default function Nav() {
    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex items-center justify-center gap-4 bg-white justify-self-center shadow-lg rounded-xl px-8 py-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/books">Books</NavLink>
                    <NavLink href="/articles">Articles</NavLink>
                </ul>
            </nav>
            <MobileNav />
        </>
    );
}
