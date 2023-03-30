import styles from "../Header.module.css";
import Btn from "../../btn/Btn.jsx";
import exitIcon from "../../../../assets/icons/exiticon.svg";
import {useAppDispatch} from "../../../../store/index.js";
import {logout} from "../../../../store/actions/authActions.js";


const ProfileBlock = (props) => {
    const dispatch = useAppDispatch()

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.profileBlock}>
            <div className={styles.profile}>
                <img src={props.avatar} className={styles.avatar}/>
                <span>{`${props.profileData.lastname} ${props.profileData.firstname} ${props.profileData.middlename}`}</span>
            </div>
            <Btn icon={exitIcon} click={logoutUser}/>
        </div>
    )
}

export default ProfileBlock