import { parseCookies } from '../src/parseCookies'

export default function ({ req, route, redirect }) {
  let isAuthenticated = false

  if (req) {
    if (req?.headers?.cookie) {
      isAuthenticated = Object.keys(parseCookies(req?.headers?.cookie))[0] === 'user'
    }
    
  } else if (document.cookie) {
    parseCookies(document.cookie)
      isAuthenticated = Object.keys(parseCookies(document.cookie))[0] === 'user'
  }

  if (!isAuthenticated && route.path !== '/login') {
    redirect({ name: 'login' })
  } else if (isAuthenticated && route.path === '/login')
    redirect({ name: 'articles' })
}
