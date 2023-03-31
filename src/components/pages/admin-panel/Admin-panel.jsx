import { useQuery } from "react-query";
import { useUserList } from "../../../hooks/useUser.js";
import UserList from "./user-list/User-list";
import Menu from "../../UI/menu/Menu.jsx";
import style from "./Admin-panel.module.css";
import { useEffect, useState } from "react";
import { items } from "./menu-items.js";
import CreateUserForm from "./create-user-form/Create-user-form.jsx";

export const adminPanel = () => {
  const { isLoading, error, data, refetch } = useQuery(["usersList"], () =>
    useUserList()
  );

  document.title = "Brutal ITSM Админка";

  const [click, setClick] = useState(1);
  useEffect(() => {
    showForm();
  });

  const showForm = () => {
    if (click === 1) {
      return userList();
    } else {
      return createForm();
    }
  };

  const userList = () => {
    return <div className={style.userListBlockTable}>
        {isLoading ? <p>Загрузочка</p> : <UserList userList={data} />}
        
    </div>;
  };

  const createForm = () => {
    return (
      <div className={style.createUser}>
        <CreateUserForm createUser={(e) => setClick(e)} created={() => refetch()}/>
      </div>
    );
  };

  const menuItems = items;

  return (
    <div>
      <h1 className={style.title}>Панель администратора</h1>
      <div className={style.adminpanelSide}>
        <aside>
          <Menu
            title="Меню администратора"
            menuItems={menuItems}
            click={(e) => setClick(e)}
          />
        </aside>
      </div>
      <div className={style.adminpanel}>{showForm()}</div>
    </div>
  );
};

export default adminPanel;
