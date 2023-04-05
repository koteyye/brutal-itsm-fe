import { useState } from "react";
import ContentModal from "./Content-Modal";

const Testpage = () => {

  const [showModal, setShowModal] = useState(false)
  

    return (
        <div style={{ display: "flex" }}>
        {showModal && <ContentModal click1={(e) => console.log(e)} click2={() => setShowModal(false) } />}
          <button onClick={() => setShowModal(true)}>Открыть жуйню</button>
        </div>
    );
}

export default Testpage