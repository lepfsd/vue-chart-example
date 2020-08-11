

const payload = (token) => {
    const payload = token.split('.')[1]
    
    return JSON.parse(atob(payload))
}

const isValid = (token) => {
    const payload = payload(token)
       
    if(payload){
        return payload.iss == "http://127.0.0.1:3000/api/auth/login" ? true : false
    }

    return false
}

export {
    payload,
    isValid
}



