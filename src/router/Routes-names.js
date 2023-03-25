export const RoutesNames = {
    MainPage: {
        Path: '/',
        RequiredRole: false
    },
    AdminPanel: {
        Path: '/admin-panel',
        RequiredRole: true,
        Roles: ['admin']
    }
}