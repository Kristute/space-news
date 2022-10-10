import { parseCookies } from '../src/parseCookies'

export default function ({ req, route, redirect }) {
  let isAuthenticated = false

  if (req) {
    if (req?.headers?.cookie) {
      isAuthenticated = parseCookies(req?.headers?.cookie).cookie.name === 'user'
    }
    
  } else if (document.cookie) {
      isAuthenticated = parseCookies(document.cookie).cookie.name === 'user'
  }

  if (!isAuthenticated && route.path !== '/login') {
    redirect({ name: 'login' })
  } else if (isAuthenticated && route.path === '/login')
    redirect({ name: 'articles' })
}
