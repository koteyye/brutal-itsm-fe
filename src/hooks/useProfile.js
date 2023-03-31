import {Auth} from "../api/auth.js";
import { PathNames } from "../api/settings/path-names.js";
import defaultAvatar from "/defaultava.png"

export const useProfile = async() => {
    return Auth.me()
}

export const useAvatar = (data) => {
    if (!data.avatar.fileName) {
        return defaultAvatar
    }
    return `${PathNames.s3}/${data.avatar.backetName}/${data.avatar.fileName}`
}