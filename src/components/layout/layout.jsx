import React, { Fragment} from "react";
import { Row,Col,Stack } from "react-bootstrap";
import { authroutes, routes } from "../../routes"
import Nav from "../nav";

import { Link } from "react-router-dom";
const Layout =({children})=>{
    if (authroutes.indexOf(window.location.pathname) !==-1)
    {
        return <section>{children}</section>;
    }
     return(
        <Fragment>
           <Nav/>
         {children}
         {/* <Row className="vh-100">
            <Col lg={3} style={{background:"black"}}>
            <Stack direction="vertical">
                <div>
                    <Link to ={routes.dashboard}>Home</Link>
                </div>
            </Stack>
               
            </Col>
            <Col>{children}</Col>
        </Row> */}
        </Fragment>
      
    );
    };
export default Layout;