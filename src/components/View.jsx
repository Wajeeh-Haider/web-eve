import React, { useState, useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const param = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleAPICall() {
      const fetchAPI = await fetch(
        "https://6459f26365bd868e930c47e1.mockapi.io/users"
      );
      const resJson = await fetchAPI.json();
      const filterData = resJson.find((item) => item.id == param.id);
      setData(filterData);
    }

    handleAPICall();
  }, []);

  return (
    <>
      <Col md={4} lg={6}>
        <Card>
          <Card.Img variant="top" src={`${data.image}`} />
          <Card.Body>
            <Card.Title>
              {data.name} {data.lastName}
            </Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant={"success"}>{data.name}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default View;
