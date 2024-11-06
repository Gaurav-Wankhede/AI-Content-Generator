import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createRoot} from 'react-dom/client';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our AI-Powered Platform</h1>
        <p className="text-xl text-gray-300 mb-8">Explore our intelligent tools and boost your productivity</p>
        <Link href="/dashboard">
          <Button className="text-lg px-6 py-3">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
