export const state = () => ({
  username: '',
  password: ''
})

export const mutations = {
  login(state, {username, password}) {
    localStorage.setItem('token', JSON.stringify({username, password}))
    state.username = username
    state.password = password
    // TODO: call authenticate as a function here and pass user values
  },
  logout(state) {   
    state.username = null   
    state.password = null
    localStorage.removeItem('token')
    this.app.router.push('/login')
  },
  authenticate(state, authentication) {
    const {username, password} = authentication
    state.username = username
    state.password = password
    this.app.router.push(JSON.parse(localStorage.getItem('path')))
  }
}
