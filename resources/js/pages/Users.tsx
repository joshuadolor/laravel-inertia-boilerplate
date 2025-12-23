import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    Users, 
    UserPlus, 
    Search, 
    Filter,
    MoreHorizontal,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Shield,
    Edit,
    Trash2
} from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    lastLogin: string;
    department: string;
    location: string;
    phone: string;
}

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users', href: '/users' },
];

const dummyUsers: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Administrator',
        status: 'active',
        lastLogin: '2 hours ago',
        department: 'Engineering',
        location: 'New York, NY',
        phone: '+1 (555) 123-4567'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Manager',
        status: 'active',
        lastLogin: '1 day ago',
        department: 'Marketing',
        location: 'Los Angeles, CA',
        phone: '+1 (555) 234-5678'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        role: 'Developer',
        status: 'inactive',
        lastLogin: '1 week ago',
        department: 'Engineering',
        location: 'Chicago, IL',
        phone: '+1 (555) 345-6789'
    },
    {
        id: 4,
        name: 'Sarah Wilson',
        email: 'sarah.wilson@example.com',
        role: 'Designer',
        status: 'pending',
        lastLogin: 'Never',
        department: 'Design',
        location: 'Austin, TX',
        phone: '+1 (555) 456-7890'
    },
    {
        id: 5,
        name: 'David Brown',
        email: 'david.brown@example.com',
        role: 'Analyst',
        status: 'active',
        lastLogin: '3 hours ago',
        department: 'Finance',
        location: 'Seattle, WA',
        phone: '+1 (555) 567-8901'
    }
];

export default function Users() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'default';
            case 'inactive': return 'secondary';
            case 'pending': return 'destructive';
            default: return 'outline';
        }
    };

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <Head title="Users - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
                        <p className="text-muted-foreground text-sm">
                            Manage your team members and their permissions.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Add User
                        </Button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-10 pr-4 py-2 w-full border border-input rounded-md bg-background text-sm"
                        />
                    </div>
                </div>

                {/* Users Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {dummyUsers.map((user) => (
                        <Card key={user.id} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <CardTitle className="text-lg">{user.name}</CardTitle>
                                        <CardDescription className="flex items-center gap-1">
                                            <Mail className="h-3 w-3" />
                                            {user.email}
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant={getStatusColor(user.status)}>
                                            {user.status}
                                        </Badge>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-medium">{user.role}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span>{user.department}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>{user.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <span>{user.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Last login: {user.lastLogin}</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2 pt-2 border-t">
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

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{dummyUsers.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {dummyUsers.filter(u => u.status === 'active').length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {Math.round((dummyUsers.filter(u => u.status === 'active').length / dummyUsers.length) * 100)}% of total
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {dummyUsers.filter(u => u.status === 'pending').length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Awaiting approval
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Departments</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {new Set(dummyUsers.map(u => u.department)).size}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Unique departments
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
