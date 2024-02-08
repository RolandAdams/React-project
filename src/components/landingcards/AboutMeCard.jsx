import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./aboutMe.png";

function PhotoCard() {
  return (
    <Card className="card-height" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="center-btn">About me</Card.Title>
        <Card.Text className="center-btn">
          I am a full stack developer however, thers much more to me than work.
          Get to know my family and I, my personal interests, goals, and much
          more!
        </Card.Text>
        <br />
        <div className="center-btn">
          <Button variant="secondary">Who, are you?</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PhotoCard;
