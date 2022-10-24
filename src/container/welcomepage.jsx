import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {Col, Container,  Row} from "react-bootstrap";
import Images from "../assets/img/images";
import Img from "../components/myimg";


const Welcomepage = () => {
  const redirect = useNavigate(); 
  const navvy=()=>{
    redirect('auth/register');
  }
  
  const navnav=()=>{
    redirect('/auth/login')
  }
    return (
        <Fragment>
          
          
          <Container  as={"section"} fluid>
         
           <Row>
            <Col lg={6} sm={12}  md={6} className=" d-flex justify-content-center ">
              <div>
              <center>
              <p className="app">Banking App</p>
              </center>
              <Img  src={Images.lady} width='400' height={'400'} className=" d-flex justify-content-center align-items-center"></Img>
              </div>
            
            </Col>
            <Col lg={6} sm={12}  md={6} className="d-flex justify-content-center align-items-center">
            
            <button onClick={navvy} className="btn btn-bg text-black   btn-group-lg  mybtns mb-5">  Register</button>
            <div>
            <button onClick={navnav} className="btn btn-bg text-black   btn-group-lg  mybtns mb-5">Login</button>

            </div>
           


            </Col>
           
      
          
          </Row> 
          </Container>
        </Fragment>
)}
 export default Welcomepage