import { useCookie } from '@nuxt/bridge/dist/runtime'

export const state = () => ({
  username: '',
  password: '',
})

export const mutations = {
  login(state, { username, password }) {
    const userCookie = useCookie('user')
    const router = useRouter()
    state.username = username
    state.password = password
    userCookie.value = `${username}:${password}`
    router.push({ path: '/articles' })
  },
  logout(state) {
    state.username = null
    state.password = null
    document.cookie = 'user=; Max-Age=0'
    this.app.router.push('/login')
  },
  authentication(state, username) {
    state.username = username
  },
}
