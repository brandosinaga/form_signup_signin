// import { Card, Button } from "react-bootstrap";
import {Card, Button } from "react-bootstrap";


export default function ProductCard({product, cardFor}){


    const {name, price, image} = product;

    

    return (
      <Card className="mb-3" style={{ width: '10rem',height:'fit-content' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center"><h3>{name}</h3></Card.Title>
        <Card.Text className="text-center">Rp.{price},-</Card.Text>
       {cardFor === "info" ? null :  <Button variant="primary">Go somewhere</Button>}
      </Card.Body>
    </Card>
      );

}


