import { Card, Button, Col } from "react-bootstrap";
import { useState } from "react";
 
const Cards = ({ title, btnType, verify, children, onPlay, onPause , deleteCard }) => {
  const [toggle, setToggle] = useState(0);

  // function handleClick(e) {
  //   e.stopPropagation();

  //   setToggle(toggle + 1);

  //   console.log(toggle);
  // }
  
  return (
    <Col md={4} lg={6}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            {title} {toggle}
          </Card.Title>
          <Card.Text>{children}</Card.Text>
          <Button variant={btnType} onClick={(e) => deleteCard(e,title)}>
            {title} {toggle ? "✔️" : "❌"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export { Cards };
