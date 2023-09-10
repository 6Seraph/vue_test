import { defineStore } from 'pinia'

interface IUser {
  id: string
  name: string
  email: string
  phone: string
}

export const useUsersList = defineStore('users', {
  state: () => ({
    usersList: [] as IUser[],
    status: '' as 'loading' | 'done' | 'error',
    selectedUser: null as IUser | null
  }),
  getters: {
    users(state) {
      return state.usersList
    },
    user(state) {
      return state.selectedUser
    },
    getStatus(state) {
      return state.status
    }
  },
  actions: {
    fetchUsers(input = '' as string) {
      this.status = 'loading'
      const queryType = /^\d+$/.test(input) ? 'id' : 'name'
      fetch(`https://jsonplaceholder.typicode.com/users${input && `?${queryType}=${input}`}`)
        .then((response) => response.json())
        .then((data) => {
          this.usersList = data.map((user: { [k: string]: string }) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
          }))
        })
        .then(() => (this.status = 'done'))
        .catch(() => (this.status = 'error'))
    },
    selectUser(user: IUser) {
      this.selectedUser = user
      console.log(this.selectedUser)
    }
  }
})
