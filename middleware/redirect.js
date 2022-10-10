export default function ({ route, redirect }) {
    if (route.path === '/') {
        redirect({ name: 'articles' })
    }
}
