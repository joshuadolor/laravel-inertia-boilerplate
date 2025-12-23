import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { 
    Palette, 
    CheckCircle, 
    AlertCircle, 
    Info, 
    AlertTriangle,
    Copy,
    Code,
    Eye,
    Download,
    Star,
    Heart,
    ThumbsUp,
    MessageCircle,
    Share2,
    Bookmark,
    Flag,
    MoreHorizontal,
    Settings,
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Clock,
    Search,
    Filter,
    SortAsc,
    SortDesc,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
    X,
    Edit,
    Trash2,
    Save,
    RefreshCw,
    Loader2
} from 'lucide-react';

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Components', href: '/components' },
];

export default function Components() {
    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <Head title="Components - Laravel Inertia Boilerplate" />
            <div className="p-6 space-y-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Component Showcase</h1>
                        <p className="text-muted-foreground">
                            A comprehensive collection of all available UI components in this boilerplate.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Code
                        </Button>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="buttons" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-6">
                        <TabsTrigger value="buttons">Buttons</TabsTrigger>
                        <TabsTrigger value="cards">Cards</TabsTrigger>
                        <TabsTrigger value="badges">Badges</TabsTrigger>
                        <TabsTrigger value="alerts">Alerts</TabsTrigger>
                        <TabsTrigger value="forms">Forms</TabsTrigger>
                        <TabsTrigger value="navigation">Navigation</TabsTrigger>
                    </TabsList>

                    {/* Buttons Tab */}
                    <TabsContent value="buttons" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Button Components
                                </CardTitle>
                                <CardDescription>
                                    Various button styles and states for different use cases.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Button Variants</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button>Default</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="destructive">Destructive</Button>
                                        <Button variant="outline">Outline</Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button variant="link">Link</Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Button Sizes</h4>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Button size="sm">Small</Button>
                                        <Button size="default">Default</Button>
                                        <Button size="lg">Large</Button>
                                        <Button size="icon">
                                            <Settings className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Button States</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button>Normal</Button>
                                        <Button disabled>Disabled</Button>
                                        <Button>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Loading
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Button with Icons</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button>
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Item
                                        </Button>
                                        <Button variant="outline">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit
                                        </Button>
                                        <Button variant="destructive">
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Delete
                                        </Button>
                                        <Button variant="outline">
                                            <Save className="h-4 w-4 mr-2" />
                                            Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Cards Tab */}
                    <TabsContent value="cards" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Card Components
                                </CardTitle>
                                <CardDescription>
                                    Flexible card layouts for displaying content and information.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Simple Card</CardTitle>
                                            <CardDescription>
                                                A basic card with header and content.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                This is the card content area where you can place any information.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Card with Footer</CardTitle>
                                            <CardDescription>
                                                A card that includes a footer section.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                Content goes here with additional details.
                                            </p>
                                        </CardContent>
                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <span className="text-sm text-muted-foreground">Last updated: 2 hours ago</span>
                                            <Button size="sm">Action</Button>
                                        </div>
                                    </Card>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="w-full h-20 bg-muted rounded-md flex items-center justify-center">
                                                <User className="h-8 w-8 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <h4 className="font-semibold">User Profile</h4>
                                            <p className="text-sm text-muted-foreground">Manage user information</p>
                                            <Button size="sm" className="w-full">View Profile</Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="w-full h-20 bg-muted rounded-md flex items-center justify-center">
                                                <Settings className="h-8 w-8 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <h4 className="font-semibold">Settings</h4>
                                            <p className="text-sm text-muted-foreground">Configure preferences</p>
                                            <Button size="sm" variant="outline" className="w-full">Open Settings</Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="w-full h-20 bg-muted rounded-md flex items-center justify-center">
                                                <Mail className="h-8 w-8 text-muted-foreground" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <h4 className="font-semibold">Messages</h4>
                                            <p className="text-sm text-muted-foreground">View your messages</p>
                                            <Button size="sm" variant="ghost" className="w-full">Check Messages</Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Badges Tab */}
                    <TabsContent value="badges" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Badge Components
                                </CardTitle>
                                <CardDescription>
                                    Small status indicators and labels for various states.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Badge Variants</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Badge>Default</Badge>
                                        <Badge variant="secondary">Secondary</Badge>
                                        <Badge variant="destructive">Destructive</Badge>
                                        <Badge variant="outline">Outline</Badge>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Status Badges</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Active
                                        </Badge>
                                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                            <AlertCircle className="h-3 w-3 mr-1" />
                                            Pending
                                        </Badge>
                                        <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                                            <X className="h-3 w-3 mr-1" />
                                            Inactive
                                        </Badge>
                                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                            <Info className="h-3 w-3 mr-1" />
                                            Info
                                        </Badge>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Usage Examples</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">User Status:</span>
                                            <Badge>Online</Badge>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Priority:</span>
                                            <Badge variant="destructive">High</Badge>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Category:</span>
                                            <Badge variant="outline">Technology</Badge>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Count:</span>
                                            <Badge variant="secondary">42</Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Alerts Tab */}
                    <TabsContent value="alerts" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Alert Components
                                </CardTitle>
                                <CardDescription>
                                    Contextual feedback messages for user actions and system states.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertTitle>Information</AlertTitle>
                                        <AlertDescription>
                                            This is an informational alert with some additional context.
                                        </AlertDescription>
                                    </Alert>

                                    <Alert variant="destructive">
                                        <AlertTriangle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>
                                            Something went wrong. Please try again or contact support.
                                        </AlertDescription>
                                    </Alert>

                                    <Alert className="border-green-200 bg-green-50 text-green-800">
                                        <CheckCircle className="h-4 w-4" />
                                        <AlertTitle>Success</AlertTitle>
                                        <AlertDescription>
                                            Your action was completed successfully!
                                        </AlertDescription>
                                    </Alert>

                                    <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Warning</AlertTitle>
                                        <AlertDescription>
                                            Please review your input before proceeding.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Forms Tab */}
                    <TabsContent value="forms" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Form Components
                                </CardTitle>
                                <CardDescription>
                                    Input fields, form controls, and interactive elements.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold">Input Fields</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-sm font-medium">Text Input</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter text here..."
                                                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Email Input</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter email address..."
                                                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Password Input</label>
                                                <input
                                                    type="password"
                                                    placeholder="Enter password..."
                                                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Textarea</label>
                                                <textarea
                                                    rows={3}
                                                    placeholder="Enter your message..."
                                                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold">Form Controls</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-sm font-medium">Select Dropdown</label>
                                                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm">
                                                    <option>Choose an option...</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Checkbox</label>
                                                <div className="space-y-2">
                                                    <label className="flex items-center space-x-2">
                                                        <input type="checkbox" className="h-4 w-4" />
                                                        <span className="text-sm">Option 1</span>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <input type="checkbox" className="h-4 w-4" defaultChecked />
                                                        <span className="text-sm">Option 2 (checked)</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Radio Buttons</label>
                                                <div className="space-y-2">
                                                    <label className="flex items-center space-x-2">
                                                        <input type="radio" name="radio-group" className="h-4 w-4" />
                                                        <span className="text-sm">Choice 1</span>
                                                    </label>
                                                    <label className="flex items-center space-x-2">
                                                        <input type="radio" name="radio-group" className="h-4 w-4" defaultChecked />
                                                        <span className="text-sm">Choice 2 (selected)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Progress Indicators</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Progress</span>
                                                <span>75%</span>
                                            </div>
                                            <Progress value={75} className="h-2" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Loading</span>
                                                <span>45%</span>
                                            </div>
                                            <Progress value={45} className="h-2" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Complete</span>
                                                <span>100%</span>
                                            </div>
                                            <Progress value={100} className="h-2" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Navigation Tab */}
                    <TabsContent value="navigation" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="h-5 w-5" />
                                    Navigation Components
                                </CardTitle>
                                <CardDescription>
                                    Navigation elements, tabs, and interactive controls.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Tabs</h4>
                                    <Tabs defaultValue="tab1" className="w-full">
                                        <TabsList className="grid w-full grid-cols-3">
                                            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                                            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                                            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="tab1" className="mt-4">
                                            <p className="text-sm text-muted-foreground">
                                                This is the content for Tab 1. You can place any content here.
                                            </p>
                                        </TabsContent>
                                        <TabsContent value="tab2" className="mt-4">
                                            <p className="text-sm text-muted-foreground">
                                                This is the content for Tab 2. Different content for each tab.
                                            </p>
                                        </TabsContent>
                                        <TabsContent value="tab3" className="mt-4">
                                            <p className="text-sm text-muted-foreground">
                                                This is the content for Tab 3. Each tab can have unique content.
                                            </p>
                                        </TabsContent>
                                    </Tabs>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Action Buttons</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="outline">
                                            <Search className="h-4 w-4 mr-2" />
                                            Search
                                        </Button>
                                        <Button variant="outline">
                                            <Filter className="h-4 w-4 mr-2" />
                                            Filter
                                        </Button>
                                        <Button variant="outline">
                                            <SortAsc className="h-4 w-4 mr-2" />
                                            Sort
                                        </Button>
                                        <Button variant="outline">
                                            <RefreshCw className="h-4 w-4 mr-2" />
                                            Refresh
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Icon Buttons</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="outline" size="icon">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Star className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <ThumbsUp className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <MessageCircle className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Bookmark className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Flag className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Navigation Arrows</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="outline" size="icon">
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <ChevronUp className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Code Examples */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            Usage Examples
                        </CardTitle>
                        <CardDescription>
                            Code snippets showing how to use these components in your application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="bg-muted p-4 rounded-md">
                                <h4 className="font-semibold mb-2">Button Example</h4>
                                <pre className="text-sm text-muted-foreground overflow-x-auto">
{`<Button variant="outline" size="sm">
  <Plus className="h-4 w-4 mr-2" />
  Add Item
</Button>`}
                                </pre>
                            </div>
                            
                            <div className="bg-muted p-4 rounded-md">
                                <h4 className="font-semibold mb-2">Card Example</h4>
                                <pre className="text-sm text-muted-foreground overflow-x-auto">
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
                                </pre>
                            </div>
                            
                            <div className="bg-muted p-4 rounded-md">
                                <h4 className="font-semibold mb-2">Alert Example</h4>
                                <pre className="text-sm text-muted-foreground overflow-x-auto">
{`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert.
  </AlertDescription>
</Alert>`}
                                </pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
