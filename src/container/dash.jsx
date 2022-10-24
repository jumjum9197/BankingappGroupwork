import { Fragment } from "react";
import { Col, Container,  Row} from "react-bootstrap";
import Images from "../assets/img/images";
import Img from "../components/myimg";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from "../components/input";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";



const Dash = () => {

  const {logout, handleDeposit, handleWithdraw} = React.useContext(AuthContext);

  const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    const [show1, setShow1] = React.useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const redirect=useNavigate()


    const [transaction, setTransaction] = React.useState({
      deposited: "",
      withdraw: "",
      depositDescription: "",
      withdrawDescription: "",
  });

  const withdrawHandle = (e) => {
    e.preventDefault();
    handleWithdraw(transaction.withdraw);
    
}
const DepositHandle = (e) => {
  e.preventDefault();
  handleDeposit(transaction.deposited);
}

    const currentUser = JSON.parse(localStorage.getItem("current_user")) 

    const Hello=()=>{
      const hour = new Date().getHours();
      const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
      let welcomeText = "";
      
      if (hour < 12) welcomeText = welcomeTypes[0];
      else if (hour < 18) welcomeText = welcomeTypes[1];
      else welcomeText = welcomeTypes[2];
      return welcomeText
      
    }
  
    return(
        <Fragment>
          
          
              {/* <Nav name={"logo"}/> */}
            <Container as={"section"} fluid>
               <Row>
                <Col lg={3} sm={12}  md={3} className="col1">
                    <center>
                    <Img  src={Images.lady} width='300' height={'300'}
                 className="mypics d-flex justify-content-center align-items-center"></Img>

                 
                 <h5> {Hello()}  { currentUser.firstName}</h5>
                 <button 
                        className="btn border rounded-pill form-btn w-75 text-white fs-5 input but mt-5 mx-auto" 
                        id="logout" type="button" 
                        onClick={() => {
                            const out = logout();
                            if (out){
                                redirect('/welcomepage');
                            }
                        }}>
                        LogOut
                    </button>


                    </center>
              
                </Col>
                <Col lg={6} sm={12}  md={6} className="">
                <center className="card carrd ">
                    <div>
                        <h4> Current Balance:  ₦ {currentUser.deposit}</h4>
                    </div>

                </center>      
          

                
                </Col>
                <Col lg={3} sm={12}  md={3} className="col1">
                    <center>
                    <button className="btn rounded-pill form-btn w-75 mx-auto text-white fs-5 input but modalbtn" onClick={handleShow}>Withdraw</button>

                    </center>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Withdraw</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description"  
                            class="form-control border rounded mb-3" value={transaction.withdrawDescription} 
                            onChange={(withdrawDescription) => {setTransaction({...transaction, withdrawDescription})}}/>

                            <Input type="number" placeholder="Enter amount to Withdraw"  
                            class="form-control border rounded" value={transaction.withdraw} 
                            onChange={(withdraw) => {setTransaction({...transaction, withdraw})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button  variant="primary" onClick={withdrawHandle} >
                                Withdraw
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div>
                        <center>
                                                <button type="button" className="btn border rounded-pill text-white fs-5 form-btn w-75 mx-auto input but mt-5 modalbtn" onClick={handleShow1}>Deposit</button>

                        </center>
                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description" 
                            class="form-control border rounded mb-3" value={transaction.depositDescription} 
                            onChange={(depositDescription) => {setTransaction({...transaction, depositDescription})}}/>
                            
                            <Input type="number" placeholder="Enter amount to deposit" 
                            class="form-control border rounded" value={transaction.deposited} 
                            onChange={(deposited) => {setTransaction({...transaction, deposited})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={DepositHandle}>
                                Deposit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </div>
                    
              



                </Col>
               </Row>

            </Container>
   
        </Fragment>
    );
}
export default Dash;