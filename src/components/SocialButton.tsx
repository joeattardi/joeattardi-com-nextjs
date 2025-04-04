import { IconType } from 'react-icons';
import Link from 'next/link';
import clsx from 'clsx';

interface SocialButtonProps {
    icon: IconType;
    href: string;
}

export default function SocialButton({ icon: Icon, href }: SocialButtonProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                'flex items-center gap-2 px-2 py-2 rounded-lg shadow-sm hover:shadow transition-colors',
                'border border-zinc-200 hover:border-zinc-300',
                'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900',
                'hover:scale-110 transition-transform'
            )}
        >
            <Icon className="w-5 h-5" />
        </Link>
    );
}
