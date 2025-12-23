// Global type definitions for the application

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}

export interface BreadcrumbItem {
    title: string;
    href?: string;
}

export interface PaginationData {
    current_page: number;
    data: any[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface PageProps {
    auth: {
        user: User;
    };
    flash: {
        message?: string;
        error?: string;
        success?: string;
    };
    [key: string]: any;
}

// Form validation types
export interface ValidationErrors {
    [key: string]: string[];
}

// API response types
export interface ApiResponse<T = any> {
    data: T;
    message?: string;
    status: 'success' | 'error';
}

// Component prop types
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Common form field types
export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'checkbox' | 'radio';
    required?: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        custom?: (value: any) => string | null;
    };
}
