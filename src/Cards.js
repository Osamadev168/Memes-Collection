import React from "react";
import "./Cards.css";
import Card from "react-tinder-card";
import { SwipeableDrawer } from "@mui/material";

function Cards() {
  const [people, setPeople] = React.useState([
    {
      name: "Hamza Maroof",
      url: "https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/278662434_5050892934994971_6009318968155771249_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Shwi8rQ4L6sAX8Emt7Y&_nc_ht=scontent.fisb6-1.fna&oh=00_AT_wVRbNp16o-LiRZOmgVqNJL6-CTCGRph8uJ_jWcswvUQ&oe=62D88749",
    },
    {
      name: "Saqib Zaman",
      url: "https://scontent.fisb6-2.fna.fbcdn.net/v/t1.6435-9/139120428_1132646080522968_9014153683451512945_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=dlO8gqUxUdAAX9gBHIW&_nc_ht=scontent.fisb6-2.fna&oh=00_AT-y6tL6Bw8RwzsddYUQy5p8-ga8yzPJB-bZXWmVXTMNhQ&oe=62FB7612",
    },
    {
      name: "Mansoor Baig ",
      url: "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-1/274016671_3030135177298136_9011657678853082608_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6dWUmfX5rOAAX8JQX9J&_nc_ht=scontent.fisb6-2.fna&oh=00_AT_6bn_GOvTpOByC80bfhBwvqh7eCdPGMJNv9DCuDSJZlQ&oe=62DA1B46",
    },
  ]);
  const swiped = (direction, nametoDelete) => {};
  const outOfFrame = () => {
    alert("amfdf");
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
              <h4>{person.name}</h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
