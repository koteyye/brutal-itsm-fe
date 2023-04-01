import style from "../Admin-panel.module.css";
import { useQuery } from "react-query";
import { useUserList } from "../../../../hooks/useUser.js";
import UserItem from "../user-item/User-item";

const UserList = (data) => {
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
          {data.userList.length ? (
            data.userList.map((users) => (
              <UserItem key={users.id} users={users} remove={() => data.remove()} />
            ))
          ) : (
            <p>Нихуа нет</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
