export default function ({route, redirect, store}) {
  const isAuthenticated = !!store.state.auth.username

  if (!isAuthenticated && route.path !== '/login') {
    redirect({name: 'login'})
  }
}
