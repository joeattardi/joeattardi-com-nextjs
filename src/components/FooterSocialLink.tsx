export default function FooterSocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} className="text-xl text-zinc-500 hover:text-zinc-700 transition-colors">
            {icon}
        </a>
    );
}
