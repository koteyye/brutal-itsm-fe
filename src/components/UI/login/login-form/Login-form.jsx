import {useAppDispatch} from "../../../../store/index.js";
import {useForm} from "react-hook-form";
import styles from "../Login.module.css"
import {login} from "../../../../store/actions/authActions.js";
import {toast, ToastContainer} from "react-toastify";
import Btn from "../../btn/Btn.jsx";


const LoginForm = () => {
    const dispatch = useAppDispatch()

    const {register, reset, handleSubmit, setError, formState: {errors}} = useForm({
        mode: 'onBlur'
    })

    const signIn = (data) => {
        dispatch(login(data))

        reset()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(signIn)}>
            <input {...register('login', {required: "Логин обязателен для заполнения"})}
                placeholder='Логин'/>
            {errors.login ? <small>{errors.login.message}</small> : <div/>}
            <input {...register('password', {required: "Пароль обязательный для заполнения", minLength: 8})}
                placeholder='Пароль'
            type='password'/>
            {errors.password?.type === "required" && <small>{errors.password.message}</small>}
            {errors.password?.type === "minLength" && <small>Минимальная длинна пароля 8 символов</small>}
            <Btn label='Войти' click={handleSubmit(signIn)} />
        </form>
    )
}

export default LoginForm