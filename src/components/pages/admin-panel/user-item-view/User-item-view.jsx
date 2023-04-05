import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {useUser} from "../../../../hooks/useUser.js";
import style from "../Admin-panel.module.css"
import {useAvatar} from "../../../../hooks/useProfile.js";
import Btn from "../../../UI/btn/Btn.jsx";
import {useState} from "react";
import UserInfo from "./userInfo/User-info.jsx";
import AvatarInfo from "./avatarInfo/Avatar-info.jsx";

const UserItemView = () => {


    const {id} = useParams()

    const {data, isLoading, error, refetch} = useQuery(['user'], () => useUser(id))

    if (isLoading) return <p>Loading...</p>


    return <div>
        <Link style={{color: "gray", marginLeft: "20px"}} to={'/admin-panel'}>Назад</Link>
        <h1 style={{textAlign: "center"}}>Профиль чувака: {data.login}</h1>
        <div className={style.userItemView}>
            <AvatarInfo userData={data} updateAvatar={refetch}/>
            <UserInfo userData={data}/>
        </div>
    </div>

}

export default UserItemView