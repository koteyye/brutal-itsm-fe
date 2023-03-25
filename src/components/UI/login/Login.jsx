import LoginForm from "./login-form/Login-form.jsx";
import {useSelectToken} from "../../../hooks/useRedux.js";
import styles from "./Login.module.css"
import logo from "/logoend.png"

const Login = ({children}) => {

    const token = useSelectToken()

    const isLogged = () => <div>{children}</div>

    const loginPage = () => (
        <div className={styles.login}>
            <img className={styles.image} src={logo} alt="logo"/>
            <LoginForm/>
        </div>
    )

    return <div>
        {token ? isLogged() : loginPage()}
    </div>
}

export default Login