import {payload, isValid} from './Token'
import { getToken, getUser, clear, store} from './AppStorage'

import axios from 'axios'


const loggedIn = () => {
    return hasToken()
}

const login = (data) => {
    axios.post('http://127.0.0.1:3000/api/auth/login', data)
        .then(res => responseAfterLogin(res)) 
        .catch(error => console.log(error))
}

const responseAfterLogin = (res) => {
        
    const access_token = res.data.access_token
    const username = res.data.user
    
    
    if(isValid(access_token)) {
        store(username, access_token)
        window.location = './transactions'
        
    }
}

const hasToken = () => {
    const storedToken = getToken()
    if (storedToken) {
        return isValid(storedToken) ? true : false
    }
    return false
}

const logout = () => {
    clear()
    window.location = './'
}

const name = () => {
    if (loggedIn()) {
        return getUser()
    }
}

const id = () => {
    if (loggedIn()) {
        const sub = payload(getToken())
        return sub.sub
    }
}

export {
    loggedIn,
    login,
    responseAfterLogin,
    hasToken,
    logout,
    name,
    id

}