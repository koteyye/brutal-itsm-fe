import style from "../../Admin-panel.module.css";


const UserInfo = (props) => {

    const userData = props.userData

    return (
        <div className={style.userInfo}>
            <h3>Информация о чуваке</h3>
            <div className={style.infoItem}>
                <label>Фамилия:</label>
                <input disabled={true} value={userData.lastname}/>
            </div>
            <div className={style.infoItem}>
                <label>Имя:</label>
                <input disabled={true} value={userData.firstname}/>
            </div>
            {userData.middlename &&
                <div className={style.infoItem}>
                    <label>Отчетство:</label>
                    <input disabled={true} value={userData.middlename}/>
                </div>}
            <div className={style.infoItem}>
                <label>Login:</label>
                <input disabled={true} value={userData.login}/>
            </div>
            <div className={style.infoItem}>
                <label>Должность:</label>
                <input disabled={true} value={userData.job}/>
            </div>
            <div className={style.infoItem}>
                <label>Организация:</label>
                <input disabled={true} value={userData.org}/>
            </div>
            <div className={style.infoItemArray}>
                <label>Роли:</label>
                {userData.roleList.map(roles => <input key={roles} disabled={true} value={roles}/>)}
            </div>
        </div>
    )
}

export default UserInfo