import style from '../Admin-panel.module.css'
import {useAvatar} from "../../../../hooks/useProfile.js";
import Btn from "../../../UI/btn/Btn.jsx";
import deleteIcon from "../../../../assets/icons/deleteicon.svg"

const UserItem = (props) => {
    const ava = useAvatar(props.users)

    return (
        <tr>
            <td className={style.tdava}>
                <img src={ava} width="100px" height="100px" alt="avatar" />
            </td>
            <td>{props.users.login}</td>
            <td>{props.users.lastname} {props.users.firstname} {props.users.middlename}</td>
            <td>{props.users.job}</td>
            <td>{props.users.org}</td>
            <td className={style.tdbtn}>
                <Btn icon={deleteIcon} />
            </td>
        </tr>
    )
}

export default UserItem