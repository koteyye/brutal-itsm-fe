import {useSelector} from "react-redux";

export const useSelectToken = () => {
    try {return useSelector((state) => state.auth.authData.accessToken)}
    catch (e) {
        return ""
    }
}

export const useSelectProfile = () => {
    return useSelector((state) => state.auth.profileData.profile)
}