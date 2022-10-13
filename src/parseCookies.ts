interface cookiesProps {
    name: string
    value: string
}

export function parseCookies(cookies: string) {
    let cookie = <cookiesProps>{}

    cookies.split(';').map((cookies) => {
        const keyValue = cookies.split('=')
        cookie = {
            name: keyValue[0],
            value: keyValue[1],
        }


        return {
            cookie
        }
    })

   return { cookie };
}
