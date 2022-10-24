import React from "react";
import { Card } from "react-bootstrap";

const CustomCard =({name, description, className})=>{
    return( 
    <Card className={className}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
  )
}
export default CustomCard;