
    var storeToken = (token) =>{
        return localStorage.setItem('token', token)
    }

    var storeUser = (user) =>{
        return localStorage.setItem('user', user)
    }

    var store = (user, token) =>{
        this.storeToken(token)
        this.storeUser(user)
        
    }

    var clear = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    var getToken = () =>{
        return localStorage.getItem('token')
    }

    var getuser = () =>{
        return localStorage.getItem('user')
    }

export {
    storeToken,
    storeUser,
    store,
    clear,
    getToken,
    getuser
}