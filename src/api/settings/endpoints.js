import {PathNames} from "./path-names";

const Endpoints = {
    AUTH: {
        SIGN_IN: `${PathNames.userService}/auth/sign-in`,
        ME: `${PathNames.userService}/auth/me`,
    },
    USER: {
        UserList: `${PathNames.userService}/api/users/`,
        User: `${PathNames.userService}/api/users/`,
        CreateUser: `${PathNames.userService}/api/users/create`,
        UploadAvatar: `${PathNames.userService}/api/users/avatar/upload/`,
        DeleteUser: `${PathNames.userService}/api/users/delete/`,
        RolesList: `${PathNames.userService}/api/users/roles`
    },
    SEARCH: {
        SearchJob: `${PathNames.userService}/api/search/job/`,
        SearchOrg: `${PathNames.userService}/api/search/org/`,
    }
}

export default Endpoints