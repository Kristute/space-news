export const state = () => ({
    username: '',
    password: ''
  })
  
  export const mutations = {
    setUser(state, username) {
      state.username = username
    },
    setPass(state, password) {      
      state.password = password
    }
  }
  