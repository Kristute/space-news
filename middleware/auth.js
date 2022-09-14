export default function ({redirect, store}) {
  const isAuthenticated = !!store.state.auth.username
  if (!isAuthenticated) {
    redirect({name: 'login'})
  }
}
