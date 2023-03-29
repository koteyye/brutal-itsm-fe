import {getUser} from "../api/users.js";


export const useUserList = async() => {
    return await getUser.usersList()
}

export const useRoleList = async() => {
    return await getUser.roleList()
}

export const useCreateUser = async(data) => {
    return 0
}