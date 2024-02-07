import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./Mountain.png";
import "./Card.css";

function PhotoCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Photography</Card.Title>
        <Card.Text>
          Photography is just a hobby of mine. I'm by no definition a pro! These
          photos simply document my family's travels. If you se something you
          like feel free to let me know!
        </Card.Text>
        <div className="center-btn">
          <Button variant="primary">Gallery</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PhotoCard;
