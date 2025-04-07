import { PiMaskSadDuotone } from 'react-icons/pi';
import Link from 'next/link';

export const runtime = 'edge';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center p-4 pt-20">
            <div className="text-center space-y-8 max-w-2xl">
                <div className="relative">
                    <div className="text-9xl text-blue-500">
                        <PiMaskSadDuotone />
                    </div>
                    <div className="absolute -top-4 -right-4 text-4xl animate-pulse">404</div>
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
                    <p className="text-xl text-gray-600">
                        Looks like you&apos;ve ventured into uncharted territory. 
                        Don&apos;t worry, we&apos;ll help you find your way back!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        href="/"
                        className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Take Me Home
                    </Link>
                    <Link 
                        href="/blog"
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Blog
                    </Link>
                </div>
            </div>
        </div>
    );
}
