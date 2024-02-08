import React from "react";
import Card from "react-bootstrap/Card";
import "./AboutMe.css";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import meImage from "./me.png";
import usMountian from "./usMountain.png";
import dogs from "./dogs.png";
import usHiking from "./usHiking.png";

const AboutMe = () => {
  return (
    <div className="hide-overflow">
      <NavBar />
      <div className="container">
        <div className="card-center">
          <Card style={{ width: "100rem" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Card.Img variant="top" src={meImage} />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>Roland Adams</Card.Title>
                  <Card.Text>
                    I am a Full Stack Software Developer with a passion for
                    learning and developing better skills. I am a passionate
                    angler and outdoorsman who enjoys new experiences and
                    adventure with my family. I'm also a huge nerd... since I
                    was a kid I have enjoyed playing video games and messing
                    around with computers which led to my interest in coding
                    years later.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div className="card-center">
          <Card style={{ width: "100rem" }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>My Family</Card.Title>
                  <Card.Text>
                    My wife Katie and I have been married since June of 2019. We
                    left our small home town in Mississippi and after a few
                    years, we bought a house in Tennesse oustside of Nashville.
                    Together we have an adventurous spirit that leads us to many
                    different places where we enjoy new experiences together. I
                    couldn't have asked for a better partner and friend to go
                    through life with.
                  </Card.Text>
                </Card.Body>
              </div>
              <div className="col-md-4">
                <Card.Img variant="top" src={usMountian} />
              </div>
            </div>
          </Card>
        </div>
        <div className="card-center">
          <Card style={{ width: "100rem" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Card.Img variant="top" src={dogs} />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>Four Legged Family</Card.Title>
                  <Card.Text>
                    We have two dogs that we like to spoil and take everywhere
                    we go. Athena, the one on the left, is a Golden Retriver
                    that keeps me on my toes with non-stop energy and chaos.
                    Oakley, the one on the right, is a Lab/German Shepard mix
                    that we rescued from the middle of the road. He may look
                    tough but he's the sweetest dog you'll ever meet.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
        <div className="card-center">
          <Card style={{ width: "100rem" }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>Who We Are</Card.Title>
                  <Card.Text>
                    Together we are a happy family of four that is just trying
                    to get through life and enjoy it along the way taking it one
                    day at a time. It's hard to tell where we'll end up or what
                    we'll do when we get there but one thing is for certain it's
                    going to be a fun journey... and honestly you'll probably
                    find us on a beach fishing... we hate the cold.
                  </Card.Text>
                </Card.Body>
              </div>
              <div className="col-md-4">
                <Card.Img variant="top" src={usHiking} />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
