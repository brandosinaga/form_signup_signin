import { Button, Card } from "react-bootstrap"

export default function LoginKelolaCard({title, image}){


        return(<>
          <Card className="mb-3" style={{ width: '15rem',height:'fit-content' }}>
            <Card.Img variant="top" src={image} />
             <Card.Body>
                <Card.Title className="text-center"><h3>{title}</h3></Card.Title>
                <Card.Text className="text-center">
                    <Button variant="primary">Go somewhere</Button>
                </Card.Text>
            </Card.Body>
            </Card>
            </>)

}