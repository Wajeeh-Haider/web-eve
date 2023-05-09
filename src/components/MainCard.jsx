import { Cards } from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
// import ArrObj from "../data/CardsData";
import { Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function MainCard() {
  const [data, setData] = useState([]);

  const deleteCard = (e, name) => {
    e.stopPropagation();
    const filterArray = data.filter((item) => {
      return item.name !== name;
    });
    setData(filterArray);
  };

  useEffect(() => {
    async function handleAPICall() {
      const fetchAPI = await fetch(
        "https://6459f26365bd868e930c47e1.mockapi.io/users"
      );
      const resJson = await fetchAPI.json();
      setData(resJson);
    }

    handleAPICall();
  }, []);

  return (
    <>
      <Container onClick={() => console.log("Container")}>
        <Row>
          {data?.map((item, index) => {
            return (
              <Cards
                {...item}
                key={index}
                onPlay={() => console.log(item.title, " Play!!")}
                onPause={() => console.log(item.title, " Pause!")}
                deleteCard={deleteCard}
              >
                sdmnsdbambsdmbd
              </Cards>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default MainCard;
