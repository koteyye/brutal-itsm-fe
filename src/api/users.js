import {axiosInstance} from "./settings/instance.js";
import Endpoints from "./settings/endpoints.js";

export const getUser = {
    usersList: () => axiosInstance.get(Endpoints.USER.UserList),
    userById: (id) => axiosInstance.get(`${Endpoints.USER.User}${id}`),
    roleList: () => axiosInstance.get(Endpoints.USER.RolesList),
    uploadAvatar: (id, file) => axiosInstance.post(`${Endpoints.USER.UploadAvatar}${id}`, file),
    createUser: (data) => axiosInstance.post(`${Endpoints.USER.CreateUser}`, data),
    deleteUser: (id) => axiosInstance.delete(`${Endpoints.USER.DeleteUser}${id}`)
}

export const search = {
    searchJob: (query) => axiosInstance.get(`${Endpoints.SEARCH.SearchJob}${query}`),
    searchOrg: (query) => axiosInstance.get(`${Endpoints.SEARCH.SearchOrg}${query}`)
}