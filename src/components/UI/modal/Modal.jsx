import style from "./Modal.module.css"

const Modal = (props) => {

    return (
      <div style={{margin: '0', position: 'absolute', width:'100%', height: '100%', backdropFilter: 'blur(2px)'}}>
        <div style={props.style} className={style.modal}>
            <div>Заголовок</div>   
          <props.content />
        </div>
      </div>
    );
}

export default Modal

