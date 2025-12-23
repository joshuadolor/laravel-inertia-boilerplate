// Route helper functions for consistent URL generation
export const routes = {
    dashboard: () => '/dashboard',
    home: () => '/',
    login: () => '/login',
    register: () => '/register',
    profile: () => '/profile',
    settings: () => '/settings',
    users: () => '/users',
    usersCreate: () => '/users/create',
    usersEdit: (id: string | number) => `/users/${id}/edit`,
    usersShow: (id: string | number) => `/users/${id}`,
};

// Export individual route functions for convenience
export const {
    dashboard,
    home,
    login,
    register,
    profile,
    settings,
    users,
    usersCreate,
    usersEdit,
    usersShow,
} = routes;
