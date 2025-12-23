# Laravel Inertia.js Boilerplate

A modern, full-stack boilerplate for building web applications with Laravel, Inertia.js, React, and TypeScript.

## 🚀 Features

- **Laravel 12** - Latest Laravel framework
- **Inertia.js** - Modern SPA experience without the complexity
- **React 19** - Latest React with TypeScript support
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Radix UI** - Accessible, unstyled UI components
- **TypeScript** - Full type safety across the stack
- **Dark Mode** - Built-in dark/light theme support
- **Modern Tooling** - ESLint, Prettier, Vite, and more
- **Component Library** - Reusable UI components
- **Responsive Design** - Mobile-first approach

## 📋 Prerequisites

- PHP 8.2 or higher
- Node.js 20.19.0 or higher (22.12.0+ recommended)
- Composer
- NPM or Yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laravel-inertia-boilerplate
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   ```

6. **Build assets**
   ```bash
   npm run build
   ```

## 🚀 Development

### Start the development server

```bash
# Start Laravel server
php artisan serve

# In another terminal, start Vite
npm run dev
```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run build:ssr` - Build with SSR support
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run types` - Check TypeScript types

## 📁 Project Structure

```
laravel-inertia-boilerplate/
├── app/
│   ├── Http/Controllers/     # Laravel controllers
│   └── ...
├── resources/
│   ├── js/
│   │   ├── components/       # Reusable React components
│   │   │   └── ui/          # Base UI components
│   │   ├── layouts/         # Layout components
│   │   ├── pages/           # Inertia page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── routes/          # Route helpers
│   │   ├── types/           # TypeScript type definitions
│   │   ├── app.tsx          # Main app entry point
│   │   └── ssr.tsx          # SSR entry point
│   ├── css/
│   │   └── app.css          # Main stylesheet
│   └── views/
│       └── app.blade.php    # Main Blade template
├── routes/
│   └── web.php              # Web routes
└── ...
```

## 🎨 UI Components

This boilerplate includes a comprehensive set of UI components built with Radix UI and styled with Tailwind CSS:

- **Button** - Various button styles and sizes
- **Card** - Content containers with header, body, and footer
- **Badge** - Status indicators and labels
- **Progress** - Progress bars and indicators
- **Alert** - Notification and alert messages
- **Tabs** - Tabbed content navigation
- **Separator** - Visual dividers

### Using Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🌙 Dark Mode

Dark mode is built-in and can be controlled via the `useAppearance` hook:

```tsx
import { useAppearance } from '@/hooks/use-appearance'

function ThemeToggle() {
  const { setTheme, getTheme } = useAppearance()
  
  return (
    <button onClick={() => setTheme('dark')}>
      Toggle Dark Mode
    </button>
  )
}
```

## 🛣️ Routing

Routes are defined in Laravel and can be referenced in React using the route helpers:

```tsx
import { dashboard, users } from '@/routes'

// In your component
<Link href={dashboard()}>Dashboard</Link>
<Link href={users()}>Users</Link>
```

## 📝 TypeScript

The project is fully typed with TypeScript. Common types are defined in `resources/js/types/index.ts`:

```tsx
import { User, PageProps, BreadcrumbItem } from '@/types'

interface MyPageProps extends PageProps {
  users: User[]
  breadcrumbs: BreadcrumbItem[]
}
```

## 🧪 Testing

The boilerplate is set up for testing with PHPUnit and Pest:

```bash
# Run tests
php artisan test

# Run tests with coverage
php artisan test --coverage
```

## 📦 Adding New Components

1. Create your component in `resources/js/components/`
2. Export it from the appropriate index file
3. Use it in your pages or other components

## 🔧 Customization

### Styling
- Modify `resources/css/app.css` for global styles
- Update `tailwind.config.js` for theme customization
- Use the `cn()` utility for conditional classes

### Components
- Extend base components in `resources/js/components/ui/`
- Create feature-specific components in `resources/js/components/`

### Layouts
- Modify `resources/js/layouts/app-layout.tsx` for the main layout
- Create new layouts as needed

## 📚 Documentation

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🙏 Acknowledgments

- [Laravel](https://laravel.com/) - The PHP framework
- [Inertia.js](https://inertiajs.com/) - The modern monolith approach
- [React](https://react.dev/) - The UI library
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Radix UI](https://www.radix-ui.com/) - The component primitives