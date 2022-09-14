export const state = () => ({
  username: '',
  password: ''
})

export const mutations = {
  login(state, username, password) {
    state.username = username
    state.password = password
  },
  logout(state, router) {   
    state.username = null   
    state.password = null
    router.push({ name: 'login' })
  }
}
