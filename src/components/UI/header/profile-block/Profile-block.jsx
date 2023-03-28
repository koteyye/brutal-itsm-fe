import styles from "../Header.module.css";
import Btn from "../../btn/Btn.jsx";
import exitIcon from "../../../../assets/icons/exiticon.svg";


const ProfileBlock = (props) => {
    return (
        <div className={styles.profileBlock}>
            <div className={styles.profile}>
                <img src={props.avatar} className={styles.avatar}/>
                <span>{`${props.profileData.lastname} ${props.profileData.firstname} ${props.profileData.middlename}`}</span>
            </div>
            <Btn icon={exitIcon} />
        </div>
    )
}

export default ProfileBlock