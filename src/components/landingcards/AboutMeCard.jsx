import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./aboutMe.png";

function PhotoCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>About me</Card.Title>
        <Card.Text>
          I am a full stack developer however, thers much more to me than work.
          Get to know my family and I, my personal interests, goals, and much
          more!
        </Card.Text>
        <div className="center-btn">
          <Button variant="primary">Who, are you?</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PhotoCard;
