import {useProfile} from "./useProfile.js";
import {useSelectToken} from "./useRedux.js";

export const useToken = () => {
    return localStorage.getItem("token")
}

export const useCheckLogin = async () => {
    const tokenRedux = useSelectToken()
    if (tokenRedux !== "") {
        return false
    }
    const token = localStorage.getItem('token')
    if (!token ) {
        return false
    }
    try {
        await useProfile()
        return true
    } catch (e) {
        localStorage.clear()
        return false
    }
}

