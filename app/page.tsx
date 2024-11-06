import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createRoot} from 'react-dom/client';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 sm:p-6 md:p-8">
      <div className="text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Welcome to Our AI-Powered Platform</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Explore our intelligent tools and boost your productivity</p>
        <Link href="/dashboard">
          <Button className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-transform">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
