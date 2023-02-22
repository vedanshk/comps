import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [showModal , setShowModal] = useState(false);
    const handleClick = ()=>{
        setShowModal(true);
    } 
    const onClose = ()=>{

        setShowModal(false)
    };
    const actionBar= <div><Button primary onClick={onClose}>I Accept</Button></div>
    const modal =<Modal onClose={onClose} actionBar={actionBar}><p> Here is an important agreement for you to accept</p> </Modal>;

   
  return (
    <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal &&  modal}
    </div>
  )
}

export default ModalPage