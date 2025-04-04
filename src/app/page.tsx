import joe from '@/images/avatar.jpg';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-4">
            <section className="flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="w-2/3 text-4xl md:text-6xl text-center font-bold">
                    Hi, I&apos;m Joe! I turn ideas into interactive web applications.
                </p>
                <Image
                    src={joe}
                    alt="Joe Attardi"
                    className="rounded-full border-4 border-zinc-200 shadow-lg w-48"
                />
            </section>
            <p className="w-2/3 text-center text-xl">
                I&apos;ve been a software developer for over 20 years, specializing in front-end
                development and creating user-friendly, accessible interfaces. I also write articles
                and books on web development to share knowledge with the tech community.
            </p>
        </div>
    );
}
