import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    BarChart3, 
    Download, 
    Calendar,
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    ShoppingCart,
    Eye,
    Filter,
    RefreshCw
} from 'lucide-react';

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Reports', href: '/reports' },
];

const reportData = {
    sales: {
        total: 125430,
        change: 12.5,
        period: 'vs last month'
    },
    users: {
        total: 2847,
        change: 8.2,
        period: 'vs last month'
    },
    orders: {
        total: 156,
        change: -3.1,
        period: 'vs last month'
    },
    revenue: {
        total: 89420,
        change: 15.7,
        period: 'vs last month'
    }
};

const monthlyData = [
    { month: 'Jan', sales: 12000, users: 800, orders: 45 },
    { month: 'Feb', sales: 15000, users: 950, orders: 52 },
    { month: 'Mar', sales: 18000, users: 1100, orders: 48 },
    { month: 'Apr', sales: 22000, users: 1250, orders: 61 },
    { month: 'May', sales: 25000, users: 1400, orders: 58 },
    { month: 'Jun', sales: 28000, users: 1550, orders: 67 },
    { month: 'Jul', sales: 32000, users: 1700, orders: 72 },
    { month: 'Aug', sales: 35000, users: 1850, orders: 78 },
    { month: 'Sep', sales: 38000, users: 2000, orders: 85 },
    { month: 'Oct', sales: 42000, users: 2150, orders: 92 },
    { month: 'Nov', sales: 45000, users: 2300, orders: 88 },
    { month: 'Dec', sales: 48000, users: 2450, orders: 95 }
];

const topProducts = [
    { name: 'Wireless Headphones', sales: 120, revenue: 35988 },
    { name: 'Smart Watch', sales: 89, revenue: 17791 },
    { name: 'Running Shoes', sales: 203, revenue: 26397 },
    { name: 'Coffee Maker', sales: 156, revenue: 14039 },
    { name: 'Laptop Stand', sales: 45, revenue: 2249 }
];

export default function Reports() {
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <Head title="Reports - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
                        <p className="text-muted-foreground text-sm">
                            Analyze your business performance and generate insights.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button variant="outline">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Refresh
                        </Button>
                        <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${reportData.sales.total.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                {reportData.sales.change > 0 ? (
                                    <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                                )}
                                {Math.abs(reportData.sales.change)}% {reportData.sales.period}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{reportData.users.total.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                {reportData.users.change > 0 ? (
                                    <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                                )}
                                {Math.abs(reportData.users.change)}% {reportData.users.period}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{reportData.orders.total}</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                {reportData.orders.change > 0 ? (
                                    <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                                )}
                                {Math.abs(reportData.orders.change)}% {reportData.orders.period}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                            <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${reportData.revenue.total.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                {reportData.revenue.change > 0 ? (
                                    <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                                )}
                                {Math.abs(reportData.revenue.change)}% {reportData.revenue.period}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="sales">Sales</TabsTrigger>
                        <TabsTrigger value="users">Users</TabsTrigger>
                        <TabsTrigger value="products">Products</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Monthly Sales Trend</CardTitle>
                                    <CardDescription>Sales performance over the last 12 months</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {monthlyData.slice(-6).map((data, index) => (
                                            <div key={data.month} className="flex items-center justify-between">
                                                <span className="text-sm font-medium">{data.month}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 bg-muted rounded-full h-2">
                                                        <div 
                                                            className="bg-primary h-2 rounded-full" 
                                                            style={{ width: `${(data.sales / 50000) * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">${data.sales.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Top Products</CardTitle>
                                    <CardDescription>Best performing products by revenue</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {topProducts.map((product, index) => (
                                            <div key={product.name} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline">{index + 1}</Badge>
                                                    <span className="text-sm font-medium">{product.name}</span>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm font-medium">${product.revenue.toLocaleString()}</div>
                                                    <div className="text-xs text-muted-foreground">{product.sales} sales</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Sales Tab */}
                    <TabsContent value="sales" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sales Analytics</CardTitle>
                                <CardDescription>Detailed sales performance and trends</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">$125,430</div>
                                            <div className="text-sm text-muted-foreground">Total Sales</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">156</div>
                                            <div className="text-sm text-muted-foreground">Total Orders</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">$804</div>
                                            <div className="text-sm text-muted-foreground">Average Order Value</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Users Tab */}
                    <TabsContent value="users" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>User Analytics</CardTitle>
                                <CardDescription>User growth and engagement metrics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">2,847</div>
                                            <div className="text-sm text-muted-foreground">Total Users</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">1,234</div>
                                            <div className="text-sm text-muted-foreground">Active Users</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">43%</div>
                                            <div className="text-sm text-muted-foreground">Retention Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Products Tab */}
                    <TabsContent value="products" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Performance</CardTitle>
                                <CardDescription>Product sales and inventory metrics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">45</div>
                                            <div className="text-sm text-muted-foreground">Total Products</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">38</div>
                                            <div className="text-sm text-muted-foreground">Active Products</div>
                                        </div>
                                        <div className="text-center p-4 border rounded-lg">
                                            <div className="text-2xl font-bold">7</div>
                                            <div className="text-sm text-muted-foreground">Out of Stock</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AuthenticatedLayout>
    );
}
