import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    Package, 
    Plus, 
    Search, 
    Filter,
    MoreHorizontal,
    DollarSign,
    Star,
    ShoppingCart,
    Edit,
    Trash2,
    Eye,
    TrendingUp,
    TrendingDown
} from 'lucide-react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    status: 'active' | 'inactive' | 'out_of_stock';
    stock: number;
    rating: number;
    sales: number;
    image: string;
}

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Products', href: '/products' },
];

const dummyProducts: Product[] = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 299.99,
        category: 'Electronics',
        status: 'active',
        stock: 45,
        rating: 4.5,
        sales: 120,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
    },
    {
        id: 2,
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor',
        price: 199.99,
        category: 'Electronics',
        status: 'active',
        stock: 23,
        rating: 4.2,
        sales: 89,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop'
    },
    {
        id: 3,
        name: 'Coffee Maker',
        description: 'Automatic drip coffee maker with programmable timer',
        price: 89.99,
        category: 'Appliances',
        status: 'out_of_stock',
        stock: 0,
        rating: 4.7,
        sales: 156,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop'
    },
    {
        id: 4,
        name: 'Running Shoes',
        description: 'Lightweight running shoes with breathable mesh',
        price: 129.99,
        category: 'Sports',
        status: 'active',
        stock: 67,
        rating: 4.3,
        sales: 203,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop'
    },
    {
        id: 5,
        name: 'Laptop Stand',
        description: 'Adjustable aluminum laptop stand for ergonomic work',
        price: 49.99,
        category: 'Accessories',
        status: 'inactive',
        stock: 12,
        rating: 4.1,
        sales: 45,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop'
    }
];

export default function Products() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'default';
            case 'inactive': return 'secondary';
            case 'out_of_stock': return 'destructive';
            default: return 'outline';
        }
    };

    const getStockColor = (stock: number) => {
        if (stock === 0) return 'text-red-600';
        if (stock < 10) return 'text-orange-600';
        return 'text-green-600';
    };

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <Head title="Products - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                        <p className="text-muted-foreground text-sm">
                            Manage your product catalog and inventory.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Product
                        </Button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2 w-full border border-input rounded-md bg-background text-sm"
                        />
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="all">All Products</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
                        <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-4">
                        {/* Products Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {dummyProducts.map((product) => (
                                <Card key={product.id} className="hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="aspect-video bg-muted rounded-md mb-3 flex items-center justify-center">
                                            <Package className="h-12 w-12 text-muted-foreground" />
                                        </div>
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                                <CardDescription className="line-clamp-2">
                                                    {product.description}
                                                </CardDescription>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge variant={getStatusColor(product.status)}>
                                                    {product.status.replace('_', ' ')}
                                                </Badge>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold">${product.price}</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm">{product.rating}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center justify-between">
                                                <span className="text-muted-foreground">Category:</span>
                                                <span>{product.category}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-muted-foreground">Stock:</span>
                                                <span className={getStockColor(product.stock)}>
                                                    {product.stock} units
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-muted-foreground">Sales:</span>
                                                <span className="flex items-center gap-1">
                                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                                    {product.sales}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 pt-2 border-t">
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <Eye className="h-4 w-4 mr-2" />
                                                View
                                            </Button>
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <Edit className="h-4 w-4 mr-2" />
                                                Edit
                                            </Button>
                                            <Button variant="outline" size="sm" className="flex-1">
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dummyProducts.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +3 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {dummyProducts.filter(p => p.status === 'active').length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {Math.round((dummyProducts.filter(p => p.status === 'active').length / dummyProducts.length) * 100)}% of total
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
                            <TrendingDown className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {dummyProducts.filter(p => p.stock < 10 && p.stock > 0).length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Need restocking
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {dummyProducts.reduce((sum, p) => sum + p.sales, 0)}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                All time sales
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
