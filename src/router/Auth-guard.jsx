import {useCheckLogin, useToken} from "../hooks/useCheckAuth.js";
import Login from "../components/UI/login/Login.jsx";
import {useEffect, useState} from "react";


const AuthGuard = ({children}) => {

    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await useCheckLogin()
            setAuthorized(data)
        }
        fetchData()
    })

    return (
        <div>
            {authorized ? children : <Login children={children}/>}
        </div>
    )
}

export default AuthGuard