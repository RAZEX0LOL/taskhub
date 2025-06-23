'use client';

import Link from 'next/link';
import {Home, Settings} from 'lucide-react';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
    { href: '/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
    { href: '/dashboard/settings', label: 'Settings', icon: <Settings size={18} /> },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen border-r bg-gray-100 p-4">
            <nav className="space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                            'flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 text-sm font-medium',
                            pathname === link.href && 'bg-gray-300 text-black'
                        )}
                    >
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}