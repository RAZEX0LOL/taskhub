import './globals.css';
import type {ReactNode} from 'react';
import Sidebar from '@/components/layout/sidebar/Sidebar';

export const metadata = {
    title: 'Task Hub',
    description: 'Task manager dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
        </body>
        </html>
    );
}