import joe from '@/images/avatar.jpg';
import Image from 'next/image';
import SocialButton from '@/components/SocialButton';
import { PiEnvelope, PiXLogo, PiLinkedinLogo, PiGithubLogo } from 'react-icons/pi';
import * as motion from 'motion/react-client';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-4">
            <section className="md:w-2/3 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center md:items-start gap-2"
                >
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
                </motion.div>
                <motion.div
                    className="rounded-full p-2 bg-white border border-zinc-200 shadow-lg"
                    initial={{ rotateY: 30, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={joe}
                        alt="Joe Attardi"
                        className="rounded-full border border-zinc-200 w-32 md:w-48"
                    />
                </motion.div>
            </section>
        </div>
    );
}
