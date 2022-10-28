
 import {Col,   Row} from "react-bootstrap";
 import Images from "../assets/img/images";
 import Img from "../components/myimg";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import { AuthContext } from "../context/auth";

const Register = () => {
  const [regDetails, setRegDetails] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    deposit:"",
  });
  const navigate = useNavigate();
  const { register } = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <Container as={"section"} fluid>
      <Row>
            <Col lg={6} sm={12}  md={6} className=" d-flex justify-content-center w-75 ">
              <div>
              <center>
              <p className="app">Registration Form</p>
              </center>
              <Img  src={Images.ladypics} width='500' height={'500'} className=" pics d-flex justify-content-center align-items-center"></Img>
              </div>
            
            </Col>
            <Col lg={6} sm={12}  md={6} className="d-flex justify-content-center align-items-center">
        <div className="w-75 mx-auto mt-5">
          <form method="POST">
            <Input
              label={"First name"}
              value={regDetails.firstName}
              onChange={(firstName) => {
                setRegDetails({
                  ...regDetails,
                  firstName,
                });
              }}
            />
            <Input
              label={"Last name"}
              value={regDetails.lastName}
              onChange={(lastName) => {
                setRegDetails({
                  ...regDetails,
                  lastName,
                });
              }}
            />
            <Input
              label={"Email"}
              type="email"
              value={regDetails.email}
              onChange={(email) => {
                setRegDetails({
                  ...regDetails,
                  email,
                });
              }}
            />
            <Input
              label={"Password"}
              type="password"
              value={regDetails.password}
              onChange={(password) => {
                setRegDetails({
                  ...regDetails,
                  password,
                });
              }}
            />
             <Input
              label={"deposit"}
              type="number"
              value={regDetails.deposit}
              onChange={(deposit) => {
                setRegDetails({
                  ...regDetails,
                  deposit,
                });
              }}
            />
            <Input
              label={"Age"}
              value={regDetails.age}
              onChange={(age) => {
                setRegDetails({
                  ...regDetails,
                  age,
                });
              }}
            />
            <Input
              label={"Gender"}
              type="select"
              value={["select your gender", "Male", "Female"]}
              onChange={(gender) => {
                setRegDetails({
                  ...regDetails,
                  gender,
                });
              }}
            />
            
            <Button
              variant="primary"
              className="w-25 d-block mx-auto mt-3"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const data = register(regDetails);
                if (data) {
                  navigate("/auth/login");
                }
              }}
            >
              Register
            </Button>
            <h5 className="text-center pt-2">
        Already have an account? <Link to={"/auth/login"}>Login</Link>
      </h5>
          </form>
        </div>
        
        </Col>
                     
      </Row> 
           
      </Container>
     
    </React.Fragment>
  );
};
export default Register;
