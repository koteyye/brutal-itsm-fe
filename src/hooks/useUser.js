import {getUser} from "../api/users.js";


export const useUserList = async() => {
    const res = await getUser.usersList()
    return res.data
}

export const useRoleList = async() => {
    return await getUser.roleList()
}



export const useCreateUser = async(data, avatar) => {
    const newData = {...data, password: '12345678'}
    try {
        const userData = await getUser.createUser(newData)
        if (!!avatar) {
            const fileId = await useUploadAvatar(userData.data.id, avatar)
            return userId, fileId
        }
        return userId
    } catch (e) {
        return null
    }
}

const useUploadAvatar = async(id, file) => {
    return await getUser.uploadAvatar(id, file)
}