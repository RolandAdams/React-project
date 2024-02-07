import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./resume.png";

function ResumeCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          Checkout out my professional resume here. Feel free to share it with
          others. I am always open to new opportunitites where I can grow and
          contribute!
        </Card.Text>
        <div className="center-btn">
          <Button variant="primary">Get it Here!</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResumeCard;
