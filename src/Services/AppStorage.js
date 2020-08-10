export class AppStorage 
{
    storeToken(token) {
        return localStorage.setItem('token', token)
    }

    storeUser(user) {
        return localStorage.setItem('user', user)
    }

    store(user, token) {
        this.storeToken(token)
        this.storeUser(user)
        
    }

    clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    getToken() {
        return localStorage.getItem('token')
    }

    getuser() {
        return localStorage.getItem('user')
    }

}
