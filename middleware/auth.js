import { parseCookies } from 'h3'

export default function ({ req, route, redirect }) {
  let isAuthenticated = false

  if (req) {
    isAuthenticated = !!parseCookies(req)?.user?.split(':')
  } else if (document.cookie) {
    const cookies = document.cookie.split(';').map((cookie) => {
      const keyValue = cookie.split('=')

      return {
        cookieName: keyValue[0],
        cookieValue: keyValue[1],
      }
    })

    isAuthenticated = !!cookies.find((item) => item.cookieName === 'user')
  }

  if (!isAuthenticated && route.path !== '/login') {
    redirect({ name: 'login' })
  } else if (isAuthenticated && route.path === '/login')
    redirect({ name: 'articles' })
}
