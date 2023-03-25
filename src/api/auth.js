import {axiosInstance, axiosInstanceAuth} from "./settings/instance.js";
import Endpoints from "./settings/endpoints.js";


export const Auth = {
    signIn: (data) => axiosInstanceAuth.post(Endpoints.AUTH.SIGN_IN, data),
    me: () => axiosInstance.get(Endpoints.AUTH.ME)
}