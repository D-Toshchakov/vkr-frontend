import { IAuthResponse, ITokens } from '@/app/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAcceessToken = () => {
    const accessToken = Cookies.get('accessToken')
    return accessToken || null
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('access_token', data.accessToken)
    Cookies.set('refresh_token', data.refreshToken)
}

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}
export const removeFromStorage = () => {
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}