import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { 
    Users, 
    Building, 
    Calendar,
    DollarSign,
    Activity,
    TrendingUp,
    Clock,
    AlertCircle,
    CheckCircle,
    XCircle,
    ArrowUp,
    ArrowDown,
    BarChart3,
    CreditCard,
    BriefcaseMedical,
    UserCheck,
    FileText,
    Gift,
    Banknote,
    Receipt,
    Car,
    Baby,
    GraduationCap,
    ShoppingCart,
    Shield,
    AlertTriangle,
    Wallet,
    TrendingDown,
    CircleDollarSign,
    UserPlus,
    Briefcase,
    Timer,
    HandCoins,
    Landmark,
    Gavel,
    Target,
    Info,
    Settings
} from 'lucide-react';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    
    // Sample data for demonstration
    const accountBalances = {
        working: { 
            balance: 152345.67, 
            change: 12.5,
        },
        government: { 
            balance: 45980.12, 
            change: 8.2,
        },
        loan: { 
            balance: 35500.00, 
            change: -5.3,
        },
        vendor: { 
            balance: 18750.00, 
            change: 15.7,
        }
    };

    const recentActivities = [
        { id: 1, type: 'payment', message: 'Invoice #2024-1234 paid via Stripe', amount: 45000, time: '5 minutes ago', icon: DollarSign, critical: false },
        { id: 2, type: 'capacity', message: 'Capacity alert: Memorial Hospital ICU at 95%', time: '15 minutes ago', icon: AlertTriangle, critical: true },
        { id: 3, type: 'voucher', message: '15 shift completion vouchers distributed', time: '1 hour ago', icon: Gift, critical: false },
        { id: 4, type: 'penalty', message: '4-hour late penalty applied to Riverside Clinic', amount: 500, time: '2 hours ago', icon: Gavel, critical: false },
    ];

    const kpis = [
        { name: 'Shift Fulfillment', value: 89, target: 95, trend: 'up' },
        { name: 'Payment Collection', value: 92.5, target: 95, trend: 'stable' },
        { name: 'Capacity Utilization', value: 78, target: 85, trend: 'down' },
        { name: 'Voucher Redemption', value: 84.5, target: 90, trend: 'up' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-6">
                {/* Header with System Status */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground text-sm">
                            Welcome to your Laravel Inertia.js boilerplate dashboard.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="px-3 py-1">
                            <Activity className="h-3 w-3 mr-1" />
                            System: Operational
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                            <Users className="h-3 w-3 mr-1" />
                            Ready to Build
                        </Badge>
                    </div>
                </div>

                {/* Financial Overview */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Working Account</CardTitle>
                            <Wallet className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${accountBalances.working.balance.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                <span className={accountBalances.working.change > 0 ? 'text-green-600' : 'text-red-600'}>
                                    {accountBalances.working.change > 0 ? <ArrowUp className="inline h-3 w-3" /> : <ArrowDown className="inline h-3 w-3" />}
                                    {Math.abs(accountBalances.working.change)}%
                                </span> from last week
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Government Account</CardTitle>
                            <Landmark className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${accountBalances.government.balance.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                Tax & Penalties
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Loan Account</CardTitle>
                            <HandCoins className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${accountBalances.loan.balance.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                Advances this month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Vendor Accounts</CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${accountBalances.vendor.balance.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                3 pending payments
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid gap-6 lg:grid-cols-7">
                    {/* Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Welcome Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Welcome to Your Boilerplate</CardTitle>
                                <CardDescription>This is a comprehensive Laravel Inertia.js boilerplate with React and TypeScript</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        This boilerplate includes:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Laravel 12 with Inertia.js</li>
                                        <li>React 19 with TypeScript</li>
                                        <li>Tailwind CSS with custom theme</li>
                                        <li>Radix UI components</li>
                                        <li>Dark mode support</li>
                                        <li>Modern development tools</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activities Feed */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activities</CardTitle>
                                <CardDescription>Live updates and system notifications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivities.map((activity) => (
                                        <div key={activity.id} className="flex items-start justify-between p-3 rounded-lg border">
                                            <div className="flex items-start space-x-3">
                                                <div className={`p-2 rounded-full ${activity.critical ? 'bg-red-100' : 'bg-gray-100'}`}>
                                                    <activity.icon className={`h-4 w-4 ${activity.critical ? 'text-red-600' : 'text-gray-600'}`} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{activity.message}</p>
                                                    {activity.amount && (
                                                        <p className="text-sm text-muted-foreground">
                                                            Amount: ${activity.amount.toLocaleString()}
                                                        </p>
                                                    )}
                                                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                                                </div>
                                            </div>
                                            {activity.critical && (
                                                <Badge variant="destructive">Action Required</Badge>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Performance KPIs */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Performance Indicators</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {kpis.map((kpi) => (
                                    <div key={kpi.name} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{kpi.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">
                                                    {kpi.value}% / {kpi.target}%
                                                </span>
                                                {kpi.trend === 'up' ? (
                                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                                ) : kpi.trend === 'down' ? (
                                                    <TrendingDown className="h-3 w-3 text-red-600" />
                                                ) : (
                                                    <Activity className="h-3 w-3 text-gray-600" />
                                                )}
                                            </div>
                                        </div>
                                        <Progress 
                                            value={Math.min((kpi.value / kpi.target) * 100, 100)} 
                                            className="h-2"
                                        />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                                <CardDescription>Common tasks and shortcuts</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link href="/users">
                                    <Button className="w-full justify-start" variant="outline">
                                        <Users className="h-4 w-4 mr-2" />
                                        Manage Users
                                    </Button>
                                </Link>
                                <Link href="/products">
                                    <Button className="w-full justify-start" variant="outline">
                                        <Package className="h-4 w-4 mr-2" />
                                        Manage Products
                                    </Button>
                                </Link>
                                <Link href="/reports">
                                    <Button className="w-full justify-start" variant="outline">
                                        <BarChart3 className="h-4 w-4 mr-2" />
                                        View Reports
                                    </Button>
                                </Link>
                                <Link href="/settings">
                                    <Button className="w-full justify-start" variant="outline">
                                        <Settings className="h-4 w-4 mr-2" />
                                        Settings
                                    </Button>
                                </Link>
                                <Link href="/components">
                                    <Button className="w-full justify-start" variant="outline">
                                        <Palette className="h-4 w-4 mr-2" />
                                        Components
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
