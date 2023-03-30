import {Auth} from "../api/auth.js";
import defaultAvatar from "/defaultava.png"

export const useProfile = async() => {
    return Auth.me()
}

export const useAvatar = (data) => {
    if (!data.avatar.filename) {
        return defaultAvatar
    }
    return `${data.avatar.backetName}/${data.avatar.fileName}`
}