import style from "../../Admin-panel.module.css";
import Btn from "../../../../UI/btn/Btn.jsx";
import {useState} from "react";
import {useAvatar} from "../../../../../hooks/useProfile.js";
import AvatarLoaderModal from "../avatarLoaderModal/Avatar-loader-modal.jsx";
import Cropper from "../../../../UI/cropper/Cropper.jsx";


const AvatarInfo = (props) => {
    const [showModal, setModal] = useState(false)

    const userInfo = props.userData
    const ava = useAvatar(userInfo)

    const updateAvatar = () => {
        setModal(false)
        props.updateAvatar()
    }


    return (
        <>
        <div className={style.avatar}>
            <h3>Аватар</h3>
            <img src={ava} alt='User avatar'/>
            <div className={style.avatarBtn}>
                <Btn label='Сменить' click={() => setModal(true)}/>
            </div>
        </div>
            {showModal && <AvatarLoaderModal userId={userInfo.id} closeModal={() => setModal(false)} updateAvatar={updateAvatar} />}
        </>
    )
}

export default AvatarInfo