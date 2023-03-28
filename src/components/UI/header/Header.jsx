import styles from "./Header.module.css"
import logo from "/logoend.png"
import {useQuery} from "react-query";
import Login from "../login/Login.jsx";
import {Auth} from "../../../api/auth.js";
import {useEffect} from "react";
import Btn from "../btn/Btn.jsx";
import {useAvatar, useProfile} from "../../../hooks/useProfile.js";
import exitIcon from "../../../assets/icons/exiticon.svg"
import ProfileBlock from "./profile-block/Profile-block.jsx";

const Header = () => {
    const {isLoading, error, data} = useQuery('profile', useProfile)
    if (isLoading) return <p>Загрузка...</p>
    const avatar = useAvatar(data.data)

    return (
        <div className={styles.header}>
            <div className={styles.logobtn}>
                <img src={logo} width="100px" height="100px" alt="logo"/>
                <Btn label='Создать трабл'/>
            </div>
            <ProfileBlock profileData={data.data} avatar={avatar} />
        </div>
    )
}

export default Header