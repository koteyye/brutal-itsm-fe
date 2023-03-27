import {getUser} from "../api/users.js";


export const useUserList = async() => {
    const userList = await getUser.usersList()
    return userList
}