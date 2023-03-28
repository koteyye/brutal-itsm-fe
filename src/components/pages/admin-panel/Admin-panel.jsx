import {useQuery} from "react-query";
import {useUserList} from "../../../hooks/useUser.js";
import UserList from "./user-list/User-list";
import Menu from "../../UI/menu/Menu.jsx";
import style from "./Admin-panel.module.css"
import {useEffect, useState} from "react";
import {items} from "./menu-items.js";


export const adminPanel = () => {
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
            <div>Ну а тут будет форма создания пользака, до которой пока не дошел</div>
        )
    }

    const menuItems = items


    return (
        <div>
        <h1 className={style.title}>Меню администратора</h1>
        <div className={style.adminpanel}>
            <aside>
                {menuItems.map(mi => <Menu key={mi.id} menuItems={mi} click={(e) => setClick(e)}/>)}
            </aside>
            {showForm()}
        </div>
        </div>
    )
}

export default adminPanel