export const RoutesNames = {
    MainPage: {
        Path: '/',
        RequiredRole: false
    },
    AdminPanel: {
        Path: '/admin-panel',
        RequiredRole: true,
        Roles: ['admin']
    },
    UserItemView: {
        Path: '/admin-panel/:id',
        RequiredRole: true,
        Roles: ['admin']
    },
    TestPage: {
        Path: '/test-page'
    }
}