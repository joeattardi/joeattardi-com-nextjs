import joe from '@/images/avatar.jpg';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';
import { PiEnvelope, PiXLogo, PiLinkedinLogo, PiGithubLogo } from 'react-icons/pi';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-4">
            <section className="md:w-2/3 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Joe Attardi</h1>
                    <p className="text-zinc-500 text-center md:text-left text-xl">
                        Software developer and author specializing in front-end development and
                        creating user-friendly, accessible interfaces.
                    </p>
                    <section className="flex items-center gap-4">
                        <SocialButton icon={PiEnvelope} href="mailto:jattardi@gmail.com" />
                        <SocialButton icon={PiXLogo} href="https://x.com/joeattardi" />
                        <SocialButton
                            icon={PiLinkedinLogo}
                            href="https://www.linkedin.com/in/joeattardi/"
                        />
                        <SocialButton icon={PiGithubLogo} href="https://github.com/joeattardi" />
                    </section>
                </div>
                <Image
                    src={joe}
                    alt="Joe Attardi"
                    className="rounded-full border-4 border-zinc-200 shadow-lg w-32 md:w-48"
                />
            </section>
        </div>
    );
}
