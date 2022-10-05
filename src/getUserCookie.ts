export function getUserCookie() {
    let credentials

    if (document.cookie) {
        const cookies = document.cookie.split(';').map((cookie) => {
          const keyValue = cookie.split('=')
    
          return {
            cookieName: keyValue[0],
            cookieValue: keyValue[1],
          }
        })
    
        const userCookie = cookies.find((item) => item.cookieName === 'user')
        if (userCookie) {
          credentials = decodeURIComponent(userCookie.cookieValue).split(':')
        }
      }

    return { credentials };
}
