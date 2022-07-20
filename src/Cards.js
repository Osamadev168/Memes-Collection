import React from "react";
import "./Cards.css";
import Card from "react-tinder-card";
import { SwipeableDrawer } from "@mui/material";
import axios from "./axios.js";
function Cards() {
  const [people, setPeople] = React.useState([]);
  React.useEffect(() => {
    const FetchData = async () => {
      const req = await axios.get("/cards/memes");
      setPeople(req.data);
    };
    FetchData();
  }, []);
  const swiped = (direction, nametoDelete) => {};
  const outOfFrame = () => {
    // alert("amfdf");
  };
  return (
    <div className="container">
      <div className="card-container">
        {people.map((person) => (
          <Card
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame()}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h4>{person.title}</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
