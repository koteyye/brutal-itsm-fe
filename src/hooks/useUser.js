import {getUser} from "../api/users.js";


export const useUserList = async() => {
    const res = await getUser.usersList()
    return res.data
}

export const useRoleList = async() => {
    return await getUser.roleList()
}

export const useUser = async(id) => {
    const res = await getUser.userById(id)
    return res.data
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
        return e
    }
}

export const useUploadAvatar = async(id, file) => {
    return await getUser.uploadAvatar(id, file)
}

export const useDeleteUser = async(data) => {
    try {
        return await getUser.deleteUser(data)
    } catch (e) {
        return e
    }
}
