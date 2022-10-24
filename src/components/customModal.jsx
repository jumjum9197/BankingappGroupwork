import { Modal, Button } from "react-bootstrap";
import Input from "./input";
import React from "react";


const CustomModal= ({title, data, setData, show = false, show1=false, setShowModal, handlewithdraw,handletodo, operation})=>{
// const [showModal, setShowModal] = React.useState(show)
    return(
        <Modal onHide={()=> setShowModal(false)} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
        <Input
        type={"number"}
          placeholder={"Amount"}
          value={data.amount}
          onChange={(amount) => {
            setData({
              ...data,
              amount,
            });
          }}
        />
        <Input
        type={"text"}
          placeholder={"Narration"}
          value={data.Narration}
          onChange={(Narration) => {
            setData({
              ...data,
              Narration,
            });
          }}
        />
        </Modal.Body>
  
        <Modal.Footer>
          {/* <Button variant="primary" onClick={()=>handletodo()}>Send</Button> */}
          <Button variant="primary" onClick={()=>operation==="withdraw"? handlewithdraw() :handletodo()}>Send</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CustomModal;