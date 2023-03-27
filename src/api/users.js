import {axiosInstance} from "./settings/instance.js";
import Endpoints from "./settings/endpoints.js";

export const getUser = {
    usersList: () => axiosInstance.get(Endpoints.USER.UserList),
    userById: (id) => axiosInstance.get(`${Endpoints.USER.User}${id}`)
}