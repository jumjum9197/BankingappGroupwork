import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import { AuthContext } from "../context/auth";
import Img from "../components/myimg";
import Images from "../assets/img/images";

const Login = () => {
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  return (
    <React.Fragment>
      <Container as={"section"} fluid> 
      <Row>
      <Col lg={6} sm={12}  md={6} className=" d-flex justify-content-center ">
      <div>
              <center>
              <p className="app">Login Form</p>
              </center>
              <Img  src={Images.ladypics} width='500' height={'500'} className=" pics d-flex justify-content-center align-items-center"></Img>
              </div>

      </Col>
      <Col lg={6} sm={12}  md={6} className=" d-flex justify-content-center ">
      <div className="w-75 mx-auto mt-7">
          <form>
            <Input
              label={"Email"}
              type='email'
              value={userDetails.email}
              onChange={(email) => {
                setUserDetails({
                  ...userDetails,
                  email,
                });
              }}
            />
            <Input
              label={"Password"}
              value={userDetails.password}
              type='password'
              labelClass="pt-2"
              onChange={(password) => {
                setUserDetails({
                  ...userDetails,
                  password,
                });
              }}
            />
            <Button
              variant="primary"
              className="w-25 d-block mx-auto mt-3"
              onClick={() => {
                const res = login(userDetails.email, userDetails.password);
                if (res) {
                  navigate("/auth/dash");
                }
              }}
            >
              Login
            </Button>
            <h5 className="text-center pt-2 mb-5 mt-1">
          Don't have an account? <Link to={"/auth/register"}>Register</Link>
        </h5>
          </form>
        </div>
        
        </Col>


        
      </Row>
       
       
      </Container>
    </React.Fragment>
  );
};
export default Login;
