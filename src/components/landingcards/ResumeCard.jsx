import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./resume.png";

function ResumeCard() {
  return (
    <Card className="card-height" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="center-btn">Resume</Card.Title>
        <Card.Text className="center-btn">
          Checkout out my professional resume here. Feel free to share it with
          others. I am always open to new opportunitites where I can grow and
          contribute!
        </Card.Text>
        <br />
        <div className="center-btn">
          <Button variant="secondary">Get it Here!</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResumeCard;
