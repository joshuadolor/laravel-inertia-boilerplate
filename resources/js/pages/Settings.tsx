import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    Settings as SettingsIcon, 
    Save, 
    User, 
    Bell, 
    Shield, 
    Palette,
    Database,
    Mail,
    Lock,
    Globe,
    Smartphone,
    Monitor,
    Moon,
    Sun
} from 'lucide-react';

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/settings' },
];

export default function Settings() {
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                        <p className="text-muted-foreground text-sm">
                            Manage your application preferences and configuration.
                        </p>
                    </div>
                    <Button>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                    </Button>
                </div>

                <Tabs defaultValue="profile" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                        <TabsTrigger value="appearance">Appearance</TabsTrigger>
                        <TabsTrigger value="system">System</TabsTrigger>
                    </TabsList>

                    {/* Profile Settings */}
                    <TabsContent value="profile" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Profile Information
                                </CardTitle>
                                <CardDescription>
                                    Update your personal information and contact details.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Admin"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            defaultValue="User"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        defaultValue="admin@admin.com"
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Bio</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about yourself..."
                                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Notifications Settings */}
                    <TabsContent value="notifications" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bell className="h-5 w-5" />
                                    Notification Preferences
                                </CardTitle>
                                <CardDescription>
                                    Choose how you want to be notified about updates and activities.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">Email Notifications</h4>
                                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="h-4 w-4" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">Push Notifications</h4>
                                            <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                                        </div>
                                        <input type="checkbox" defaultChecked className="h-4 w-4" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">SMS Notifications</h4>
                                            <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                                        </div>
                                        <input type="checkbox" className="h-4 w-4" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">Marketing Emails</h4>
                                            <p className="text-sm text-muted-foreground">Receive promotional and marketing emails</p>
                                        </div>
                                        <input type="checkbox" className="h-4 w-4" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Security Settings */}
                    <TabsContent value="security" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5" />
                                    Security Settings
                                </CardTitle>
                                <CardDescription>
                                    Manage your account security and privacy settings.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Current Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lock className="h-5 w-5" />
                                    Two-Factor Authentication
                                </CardTitle>
                                <CardDescription>
                                    Add an extra layer of security to your account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium">Enable 2FA</h4>
                                        <p className="text-sm text-muted-foreground">Use an authenticator app for additional security</p>
                                    </div>
                                    <Button variant="outline">Enable</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Appearance Settings */}
                    <TabsContent value="appearance" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Appearance Settings
                                </CardTitle>
                                <CardDescription>
                                    Customize the look and feel of your application.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium mb-3">Theme</h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-muted">
                                                <Sun className="h-4 w-4" />
                                                <span className="text-sm">Light</span>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-muted">
                                                <Moon className="h-4 w-4" />
                                                <span className="text-sm">Dark</span>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-muted bg-muted">
                                                <Monitor className="h-4 w-4" />
                                                <span className="text-sm">System</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium mb-3">Language</h4>
                                        <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm">
                                            <option>English (US)</option>
                                            <option>Spanish (ES)</option>
                                            <option>French (FR)</option>
                                            <option>German (DE)</option>
                                        </select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* System Settings */}
                    <TabsContent value="system" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <SettingsIcon className="h-5 w-5" />
                                    System Settings
                                </CardTitle>
                                <CardDescription>
                                    Configure system-wide settings and preferences.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Application Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Laravel Inertia Boilerplate"
                                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Timezone</label>
                                        <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm">
                                            <option>UTC</option>
                                            <option>America/New_York</option>
                                            <option>America/Los_Angeles</option>
                                            <option>Europe/London</option>
                                            <option>Europe/Paris</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Date Format</label>
                                        <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm">
                                            <option>MM/DD/YYYY</option>
                                            <option>DD/MM/YYYY</option>
                                            <option>YYYY-MM-DD</option>
                                        </select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Alert>
                            <Database className="h-4 w-4" />
                            <AlertDescription>
                                System settings affect all users. Changes will be applied immediately.
                            </AlertDescription>
                        </Alert>
                    </TabsContent>
                </Tabs>
            </div>
        </AuthenticatedLayout>
    );
}
