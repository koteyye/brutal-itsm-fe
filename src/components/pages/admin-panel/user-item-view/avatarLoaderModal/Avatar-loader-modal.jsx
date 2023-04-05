import Modal from "../../../../UI/modal/Modal.jsx";
import Btn from "../../../../UI/btn/Btn.jsx";
import style from "../../Admin-panel.module.css";
import Cropper from "../../../../UI/cropper/Cropper.jsx";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {useUploadAvatar} from "../../../../../hooks/useUser.js";

const AvatarLoaderModal = (props) => {

    const updateAvatar = (fd) => {
        const fetchData = async() => {
            try {
                await useUploadAvatar(props.userId, fd)
                return props.updateAvatar()
            } catch (e) {return e}
        }
        fetchData()
    }

    return (
        <div className={style.avatarModalBG}>
            <div className={style.avatarModal}>
                <Cropper loadFD={(e) => updateAvatar(e)}/>
                <Btn label="Закрыть" click={() => props.closeModal()}/>
            </div>
        </div>
    )
}

export default AvatarLoaderModal


const ModalStyle = {
    width: "700px",
    height: "700px",
};