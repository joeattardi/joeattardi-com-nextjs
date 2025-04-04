import { PiMaskSadDuotone } from 'react-icons/pi';

export const runtime = 'edge';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-9xl"><PiMaskSadDuotone /></div>
            <h2 className="text-4xl">Not Found</h2>
            <p className="text-lg">The page you are looking for does not exist.</p>
        </div>
    );
}
