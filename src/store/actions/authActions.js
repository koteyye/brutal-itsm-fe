import {
    loadProfileFailure,
    loadProfileStart,
    loadProfileSuccess,
    loginFailure,
    loginStart,
    loginSuccess,
    logoutSuccess
} from "../reducer/authReducer"
import { Auth } from "../../api/auth"
import {toast} from "react-toastify";

export const login = data => async dispatch => {
    try {
        dispatch(loginStart())
        const res = await Auth.signIn(data)
        localStorage.setItem("token", res.data.token)
        toast("Ты успешно вошел в меня")

        dispatch(loginSuccess(res.data.accessToken))
    } catch (e) {
        dispatch(loginFailure(e.messages))
    }
}

export const me = () => async dispatch => {
    try {
        dispatch(loadProfileStart())
        const res = await Auth.me()
        dispatch(loadProfileSuccess(res.data))
    } catch (e) {
        dispatch(loadProfileFailure(e.messages))
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutSuccess())
    localStorage.removeItem("token")
    location.assign("/")
}
