import {useQuery} from "react-query";
import {useUserList} from "../../../hooks/useUser.js";
import UserList from "./user-list/User-list";
import Menu from "../../UI/menu/Menu.jsx";
import style from "./Admin-panel.module.css"
import {useEffect, useState} from "react";
import {items} from "./menu-items.js";
import CreateUserForm from "./create-user-form/Create-user-form.jsx";


export const adminPanel = () => {
    document.title = 'Brutal ITSM Админка'
    const [click, setClick] = useState(1)
    useEffect(() => {
        showForm()
    })

    const showForm = () => {
        if (click === 1) {
            return userList()
        } else {
            return createForm()
        }
    }

    const userList = () => (
        <div className={style.userListBlockTable}>
            <UserList />
        </div>
    )


    const createForm = () => {
        return (
            <div className={style.createUser}>
                <CreateUserForm />
            </div>
        )
    }

    const menuItems = items




    return (
        <div>
        <h1 className={style.title}>Панель администратора</h1>
            <div className={style.adminpanelSide}>
                <aside>
                    <Menu title="Меню администратора" menuItems={menuItems} click={(e) => setClick(e)}/>
                </aside>
            </div>
        <div className={style.adminpanel}>
            {showForm()}
        </div>
        </div>
    )
}

export default adminPanel