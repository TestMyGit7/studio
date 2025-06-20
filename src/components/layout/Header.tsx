import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block text-lg">
            Modern Web App Starter-A
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:justify-end">
          {/* Add nav items here if needed */}
        </nav>
      </div>
    </header>
  );
}
