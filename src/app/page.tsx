import joe from '@/images/avatar.jpg';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <section className="flex flex-col items-center gap-4">
                <p className="w-2/3 text-4xl md:text-6xl text-center font-medium">
                    Hi, I&apos;m Joe! I turn ideas into interactive web applications.
                </p>
                <Image
                    src={joe}
                    alt="Joe Attardi"
                    className="rounded-full border-4 border-zinc-200 shadow-lg w-48"
                />
            </section>
        </div>
    );
}
