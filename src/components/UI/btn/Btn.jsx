import React, {useEffect, useState} from "react";
import "./Btn.css"

const Btn = (props) => {
    const btnFormClass = () => {
        if (props.icon !== "" && props.label === "") {
            return "btn-circle"
        } return "btn"
    }

    const [chlen, setChlen] = useState(1)

    useEffect(() => {
        document.title = `Вы нажали ${chlen}`
    })

    return (
        <button type='button'
                className={`${props.color} ${btnFormClass()}`}
                disabled={props.disable}
            onClick={() => setChlen(chlen + 1)}>
            {props.icon !== "" && <img style={{margin: '10px'}} src={props.icon} width="30px" height="30px" alt="icon"/>}
            {props.label !== "" && props.label}
        </button>
    )
}

Btn.defaultProps = {
    label: "",
    color: "red",
    icon: "",
    disable: false
}

export default Btn