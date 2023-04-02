import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {useUser} from "../../../../hooks/useUser.js";
import style from "../Admin-panel.module.css"
import {useAvatar} from "../../../../hooks/useProfile.js";
import Btn from "../../../UI/btn/Btn.jsx";

const UserItemView = () => {
    const {id} = useParams()

    const {data, isLoading, error} = useQuery(['user'], () => useUser(id))

    if(isLoading) return <p>Loading...</p>

    console.log(data)

    const ava = useAvatar(data)

    return <div>
        <Link style={{color: "gray", marginLeft: "20px"}} to={'/admin-panel'}>Назад</Link>
        <h1 style={{textAlign: "center"}}>Профиль чувака: {data.login}</h1>
        <div className={style.userItemView}>
            <div className={style.avatar}>
                <h3>Аватар</h3>
                <img src={ava} alt='User avatar'/>
                <div className={style.avatarBtn}>
                    <Btn label='Сменить' />
                </div>
            </div>
            <div className={style.userInfo}>
                <h3>Информация о чуваке</h3>
                <div className={style.infoItem}>
                    <label>Фамилия:</label>
                    <input disabled={true} value={data.lastname}/>
                </div>
                <div className={style.infoItem}>
                    <label>Имя:</label>
                    <input disabled={true} value={data.firstname}/>
                </div>
                {data.middlename &&
                <div className={style.infoItem}>
                    <label>Отчетство:</label>
                    <input disabled={true} value={data.middlename}/>
                </div>}
                <div className={style.infoItem}>
                    <label>Login:</label>
                    <input disabled={true} value={data.login}/>
                </div>
                <div className={style.infoItem}>
                    <label>Должность:</label>
                    <input disabled={true} value={data.job}/>
                </div>
                <div className={style.infoItem}>
                    <label>Организация:</label>
                    <input disabled={true} value={data.org}/>
                </div>
                <div className={style.infoItemArray}>
                    <label>Роли:</label>
                    {data.roleList.map(roles => <input disabled={true} value={roles}/>)}
                </div>
            </div>
        </div>
    </div>

}

export default UserItemView