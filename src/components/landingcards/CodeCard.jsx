import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./code_image.png";

function CodeCard() {
  return (
    <Card className="card-height" style={{ width: "18rem" }}>
      <Card.Img height={190} variant="top" src={image} />
      <Card.Body>
        <Card.Title className="center-btn">Projects</Card.Title>
        <Card.Text className="center-btn">
          Take a look at my current projects as well as an overview of past
          jobs! This page will be updated regularly but always check my GitHub
          for more.
        </Card.Text>
        <br />
        <div className="center-btn">
          <Button variant="secondary">Check it Out!</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CodeCard;
