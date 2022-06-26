const app = Vue.createApp({
    data() {
        let randUserPic = Math.floor(Math.random() * 10) + 1; //Returns a random integer from 1 to 10:
        return {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john@example.com',
            gender: 'male',
            picture: `https://randomuser.me/api/portraits/men/${randUserPic}.jpg`,
        }
    },
    methods: {
        async fetchUser() {
            // use promise to get random user from randomuser.me/api
            const response = await fetch('https://randomuser.me/api')
            const { results } = await response.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})
// use #app wrapper in index.html for this app
app.mount('#app')
