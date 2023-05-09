import { Card, Button, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({
  name,
  lastName,
  address,
  description,
  image,
  id,
  btnType,
  verify,
  children,
  onPlay,
  onPause,
  deleteCard,
}) => {
  const [toggle, setToggle] = useState(0);

  // function handleClick(e) {
  //   e.stopPropagation();

  //   setToggle(toggle + 1);

  //   console.log(toggle);
  // }

  return (
    <Col md={4} lg={6}>
      <Card>
        <Card.Img variant="top" src={`${image}`} />
        <Card.Body>
          <Card.Title>
            {name} {lastName}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant={"success"} onClick={(e) => deleteCard(e, name)}>
            {name}
          </Button>
          <Link to={`/view-product/${id}`}>
            <Button variant={"primary"} onClick={(e) => deleteCard(e, name)}>
              View Product
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export { Cards };
