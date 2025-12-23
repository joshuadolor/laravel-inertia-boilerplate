import { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
    title: string;
    href?: string;
}

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    title?: string;
    description?: string;
}

export default function AppLayout({ 
    children, 
    breadcrumbs = [], 
    title,
    description 
}: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Head title={title} />
            
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">
                                Laravel Inertia Boilerplate
                            </span>
                        </a>
                    </div>
                    
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            {/* Navigation can go here */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <div className="border-b bg-muted/40">
                        <div className="container flex h-10 items-center space-x-2 text-sm text-muted-foreground">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <div key={index} className="flex items-center">
                                    {index > 0 && (
                                        <span className="mx-2">/</span>
                                    )}
                                    {breadcrumb.href ? (
                                        <a 
                                            href={breadcrumb.href}
                                            className="hover:text-foreground"
                                        >
                                            {breadcrumb.title}
                                        </a>
                                    ) : (
                                        <span className="text-foreground">
                                            {breadcrumb.title}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Page Content */}
                <div className="container py-6">
                    {title && (
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold tracking-tight">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-muted-foreground mt-2">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                    
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t bg-background">
                <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            Built with Laravel, Inertia.js, and React. A modern full-stack boilerplate.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
