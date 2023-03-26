import styles from "./Header.module.css"
import logo from "/logoend.png"
import defaultAvatar from "/defavatar.png"
import {useQuery} from "react-query";
import Login from "../login/Login.jsx";
import {Auth} from "../../../api/auth.js";
import {useEffect} from "react";

const Header = () => {


    const {isLoading, error, data} = useQuery('profile', Auth.me)
    console.log(data)
    if (isLoading) return <p>Загрузка...</p>

    if (error) return <Login/>

    const avatar = () => {
        if (!data.data.avatar.filename) {
            return defaultAvatar
        }
        return `${data.data.avatar.backetName}/${data.data.avatar.fileName}`
    }

    const ava = avatar()
    console.log(ava)

    return (
        <div className={styles.header}>
            <div className={styles.logobtn}>
                <img src={logo} width="100px" height="100px" alt="logo"/>
                <button className="btn">Создать трабл</button>
            </div>
            <div className={styles.profile}>
                <img src={ava} className={styles.avatar}/>
                <span>{`${data.data.lastname} ${data.data.firstname} ${data.data.middlename}`}</span>
            </div>

        </div>
    )
}

export default Header