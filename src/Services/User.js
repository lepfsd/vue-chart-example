import {Token} from './Token'
import {AppStorage} from './AppStorage'


class User 
{

    loggedIn = () => {
        return this.hasToken()
        
    } 

    login = (data) =>{
        
        this.$http.post('http://127.0.0.1:3000/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error))
    }

    responseAfterLogin(res) {
        
        const access_token = res.data.access_token
        const username = res.data.user
        
        
        if(Token.isValid(access_token)) {
            AppStorage.store(username, access_token)
            window.location = './forum'
            
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken()
        if(storedToken) {
            return Token.isValid(storedToken) ? true : false
        }
        return false
    }

    

    logout(){
        AppStorage.clear()
        window.location = './forum'
    }

    name() {
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id() {
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }

    own(id) {
        return (this.id() == id)
    }

    admin() {
        return this.id() == 12
    }
    
}

module.exports.User = User
