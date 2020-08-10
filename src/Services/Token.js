

var payload = (token) => {
    var payload = token.split('.')[1]
    
    return JSON.parse(atob(payload))
}

var isValid = (token) => {
    var payload = payload(token)
       
    if(payload){
        return payload.iss == "http://127.0.0.1:3000/api/auth/login" ? true : false
    }

    return false
}

export {
    payload,
    isValid
}



