import { parseCookies } from '../src/parseCookies'

export default function ({ req, route, redirect }) {
  let isAuthenticated = false

  if (req) {
    if (req?.headers?.cookie) {
      isAuthenticated = parseCookies(req?.headers?.cookie).user
    }
    
  } else if (document.cookie) {
    parseCookies(document.cookie)
      isAuthenticated = parseCookies(document.cookie).user
  }

  if (!isAuthenticated && route.path !== '/login') {
    redirect({ name: 'login' })
  } else if (isAuthenticated && route.path === '/login')
    redirect({ name: 'articles' })
}
