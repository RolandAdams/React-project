import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./Mountain.png";
import "./Card.css";

function PhotoCard() {
  return (
    <Card className="card-height" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="center-btn">Photography</Card.Title>
        <Card.Text className="center-btn">
          Photography is just a hobby of mine. I'm by no definition a pro! These
          photos simply document my family's travels. If you see something you
          like feel free to let me know!
        </Card.Text>
        <div className="center-btn">
          <Button variant="secondary">Gallery</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PhotoCard;
