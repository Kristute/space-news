import { parseCookies } from 'h3'
import { getUserCookie } from '../src/getUserCookie'

export default function ({ req, route, redirect }) {
  let isAuthenticated = false

  if (req) {
    isAuthenticated = !!parseCookies(req)?.user?.split(':')
  } else if (document.cookie) {
      const { credentials } = getUserCookie()
      isAuthenticated = !!credentials
  }

  if (!isAuthenticated && route.path !== '/login') {
    redirect({ name: 'login' })
  } else if (isAuthenticated && route.path === '/login')
    redirect({ name: 'articles' })
}
