import Modal from "../../UI/modal/Modal"


const ContentModal = (props) => {

    const content = () => {
        return (
          <div>
            <label>Я контент модалки</label>
            <button onClick={() => props.click1(1)}>Я кнопка модалки 1</button>
            <button onClick={() => props.click2()}>Закрыть эту жуйню</button>
          </div>
        );
    } 
      

    return (
        <>
            <Modal style={ModalStyle} content={content} />
        </>
    );
}

export default ContentModal

const ModalStyle = {
  width: "150px",
  height: "150px",
};