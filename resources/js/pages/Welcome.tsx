import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Code, Zap, Shield } from 'lucide-react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
                                Hello World! 👋
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Welcome to your Laravel Inertia React boilerplate. 
                                A modern, full-stack foundation for your next project.
                            </p>
                                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <Card className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                        <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <CardTitle>Fast Development</CardTitle>
                                    <CardDescription>
                                        Built with Vite, TypeScript, and modern tooling for lightning-fast development.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                                        <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <CardTitle>Modern Stack</CardTitle>
                                    <CardDescription>
                                        Laravel 12, React 19, Inertia.js, and Tailwind CSS v4 with TypeScript.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                                        <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <CardTitle>Production Ready</CardTitle>
                                    <CardDescription>
                                        Authentication, UI components, and best practices included out of the box.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                                    </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            <Badge variant="outline" className="px-4 py-2">
                                Laravel 12
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                React 19
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                TypeScript
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                Inertia.js
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                Tailwind CSS
                            </Badge>
                            <Badge variant="outline" className="px-4 py-2">
                                Vite
                            </Badge>
                                    </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            {auth.user ? (
                                <Link href={route('dashboard')}>
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Go to Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')}>
                                        <Button size="lg" className="w-full sm:w-auto">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href={route('register')}>
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                            Register
                                        </Button>
                                    </Link>
                                </>
                            )}
                                    </div>

                        {/* Footer */}
                        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                                Made with <Heart className="h-4 w-4 text-red-500" /> using Laravel Inertia React
                                        </p>
                                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}