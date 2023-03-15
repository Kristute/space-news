export function parseCookies(cookies: string): Record<string, string> {
  return cookies.split(';').reduce((data, item) => {
    const keyValue = item.split('=')
    data[keyValue[0].trim()] = keyValue[1].trim()

    return data
  }, {})
}
