import { PiEnvelope, PiGithubLogo, PiLinkedinLogo, PiRss, PiXLogo } from 'react-icons/pi';
import FooterSocialLink from './FooterSocialLink';

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center gap-4 bg-zinc-200 p-4 border border-zinc-300 border-t-0 shadow">
            <div className="flex-grow">
                <p className="text-sm text-zinc-500">&copy; 2025 Joe Attardi</p>
            </div>
            <div className="flex items-center gap-2">
                <FooterSocialLink href="mailto:jattardi@gmail.com" icon={<PiEnvelope />} />
                <FooterSocialLink href="https://x.com/joeattardi" icon={<PiXLogo />} />
                <FooterSocialLink
                    href="https://www.linkedin.com/in/joeattardi/"
                    icon={<PiLinkedinLogo />}
                />
                <FooterSocialLink href="https://github.com/joeattardi" icon={<PiGithubLogo />} />
                <FooterSocialLink href="/rss.xml" icon={<PiRss />} />
            </div>
        </footer>
    );
}
