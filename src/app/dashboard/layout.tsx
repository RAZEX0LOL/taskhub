import type {ReactNode} from 'react';

export default function SettingsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-medium">⚙️ Settings</h2>
            <section>{children}</section>
        </div>
    );
}