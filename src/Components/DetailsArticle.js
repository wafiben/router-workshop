import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useParams,useNavigate } from 'react-router-dom';

function DetailsArticle({products}) {
    const {id}=useParams();
    const foundProduct=products.find((elt)=>elt.id==id)
const navigate=useNavigate()
const handleClick=()=>{
    navigate('/home')
}
  return (
    <Card style={{ width: "18rem",margin: "auto"}}>
      <Card.Img variant="top" src= {foundProduct.image}/>
      <Card.Body>
        <Card.Title>{foundProduct.name}</Card.Title>
        <Card.Text>
         {foundProduct.price}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Back Home</Button>
      </Card.Body>
    </Card>
  );
}

export default DetailsArticle;
