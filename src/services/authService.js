import $api from '../http'

class AuthService {
    async registration({email, password}){
        return $api.post('/auth/registration', {email, password})
    }

    async login({email, password}){
        return $api.post('/auth/login', {email, password})
    }

    async checkToken(token){
        return $api.post('/auth/checkToken', {token})
    }

}
const authService = new AuthService ()
export default authService 