import {useToken} from "../hooks/useLocalStorage.js";
import Login from "../components/UI/login/Login.jsx";


const AuthGuard = ({children}) => {
    // const token = useToken()
    const token = 1
    return (
        <div>
            {token ? children : <Login children={children}/>}
        </div>
    )
}

export default AuthGuard