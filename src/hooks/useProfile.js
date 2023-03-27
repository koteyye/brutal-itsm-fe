import {Auth} from "../api/auth.js";


export const useProfile = async() => {
    const profile = Auth.me()
    console.log(profile)
    return profile
}