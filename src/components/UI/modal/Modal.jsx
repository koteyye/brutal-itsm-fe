import style from "./Modal.module.css"

const Modal = (props) => {

    return (
      <div style={{position: 'absolute', width: "100%", height: "100%", top: "0", left: "0", backdropFilter: 'blur(5px)'}}>
        <div style={props.style} className={style.modal}>
            <div>Заголовок</div>   
          <props.content />
        </div>
      </div>
    );
}

export default Modal

