import style from '../Admin-panel.module.css'
import {useQuery} from "react-query";
import {useUserList} from "../../../../hooks/useUser.js";
import UserItem from "../user-item/User-item";

const UserList = () => {
    const {isLoading, error, data} = useQuery('usersList', useUserList)
    if (isLoading) return <p>Загрузка...</p>

    return (
        <div>
            <table className={style.userListTable}>
            <thead>
            <tr className={style.trhead}>
                <th></th>
                <th>Логин</th>
                <th>ФИО</th>
                <th>Должность</th>
                <th>Организация</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {data.data.map(users => <UserItem key={users.id} users={users}/>)}
            </tbody>
            </table>
        </div>
    )
}

export default UserList
