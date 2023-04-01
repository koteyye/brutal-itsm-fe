import style from '../Admin-panel.module.css'
import {useAvatar} from "../../../../hooks/useProfile.js";
import Btn from "../../../UI/btn/Btn.jsx";
import deleteIcon from "../../../../assets/icons/deleteicon.svg"
import {useDeleteUser} from "../../../../hooks/useUser.js";
import {useLinkClickHandler} from "react-router-dom";
import {RoutesNames} from "../../../../router/Routes-names.js";

const UserItem = (props) => {
    const ava = useAvatar(props.users)

    const removeUser = async (id) => {
        await useDeleteUser(id)
        props.remove()
    }

    const openUserItem = (id) => {
        return useLinkClickHandler(`/admin-panel/${id}`)
    }

    return (
        <tr>
            <td className={style.tdava}>
                <img src={ava} width="100px" height="100px" alt="avatar" />
            </td>
            <td className={style.login} onClick={openUserItem(props.users.id)}>{props.users.login}</td>
            <td>{props.users.lastname} {props.users.firstname} {props.users.middlename}</td>
            <td>{props.users.job}</td>
            <td>{props.users.org}</td>
            <td className={style.tdbtn}>
                <Btn icon={deleteIcon} click={() => removeUser(props.users.id)}/>
            </td>
        </tr>
    )
}

export default UserItem