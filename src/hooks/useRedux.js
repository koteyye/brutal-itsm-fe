import {useSelector} from "react-redux";

export const useSelectToken = () => {
    return useSelector((state) => state.auth.authData.accessToken)
}

export const useSelectProfile = () => {
    return useSelector((state) => state.auth.profileData.profile)
}