import { Cards } from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrObj from "../data/CardsData";
import { Row, Container } from "react-bootstrap";
import { useState } from "react";

function MainCard() {
  const [data, setData] = useState(ArrObj);

  const deleteCard = (e, name) => {
    e.stopPropagation();
    const filterArray = data.filter((item) => {
      return item.title !== name;
    });
    setData(filterArray);
  };

  return (
    <>
      <Container onClick={() => console.log("Container")}>
        <Row>
          {data.map((item, index) => {
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
