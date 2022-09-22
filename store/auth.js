export const state = () => ({
  username: '',
  password: ''
})

export const mutations = {
  login(state, {username, password}) {
    state.username = username
    state.password = password
  },
  logout(state) {   
    state.username = null   
    state.password = null
    document.cookie = 'user=; Max-Age=0'
    this.app.router.push('/login')
  },
}
