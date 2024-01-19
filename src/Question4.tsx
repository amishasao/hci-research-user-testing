import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import Question5 from "./Question5";
import choice1 from "./assets/coffee1.png";
import choice2 from "./assets/coffee2.png";
import choice3 from "./assets/coffee3.png";
import choice4 from "./assets/coffee4.png";

type Question4Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question4({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question4Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion5, setShowQuestion5] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(4);

    // Update the score based on the user's choice
    const score = choice === "choice1" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(4, score);

    setShowQuestion5(true);
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(4, 0);
    updateStopwatch(4);
    setShowQuestion5(true);
    startStopwatch;
  };

  return (
    <Container fluid style={{ backgroundColor: "#ECF3FB" }}>
      <Row
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Col
          style={{
            marginTop: "4vh",
            fontSize: "7vh",
            fontFamily: "sans-serif",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <h2
            style={{ fontFamily: "Anton", fontSize: "5.5vh", marginTop: "1vh" }}
          >
            Select the black bag of coffee.
          </h2>
        </Col>
        <Col xs={2}>
          <Button
            style={{
              fontSize: 25,
              fontFamily: "Inter",
              textTransform: "uppercase",
              letterSpacing: 1,
              paddingLeft: "4vw",
              paddingRight: "4vw",
              borderRadius: "2vh",
              borderWidth: "0.2vh",
              borderColor: "#000",
            }}
            variant="light"
            onClick={handleSkip}
          >
            Skip
          </Button>{" "}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Button
            style={{
              backgroundColor: "#ecf3f8",
              borderColor: "#ecf3f8",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={choice1} style={{ height: "37vh" }} />
          </Button>
        </Col>
        <Col>
          <div
            style={{ height: "37vh", width: ".13vh", backgroundColor: "#000" }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#ecf3f8",
              borderColor: "#ecf3f8",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img src={choice2} style={{ height: "32vh" }} />
          </Button>
        </Col>
        <Col>
          <div
            style={{ height: "37vh", width: ".13vh", backgroundColor: "#000" }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#ecf3f8",
              borderColor: "#ecf3f8",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img src={choice3} style={{ height: "37vh" }} />
          </Button>
        </Col>
        <Col>
          <div
            style={{ height: "37vh", width: ".13vh", backgroundColor: "#000" }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#ecf3f8",
              borderColor: "#ecf3f8",
            }}
            onClick={() => handleNext("choice4")} // Pass the choice to handleNext
          >
            <img src={choice4} style={{ height: "37vh" }} />
          </Button>
        </Col>
      </Row>
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion5 && (
        <Question5
          onNext={() => {
            null;
          }}
          updateStopwatch={updateStopwatch}
          startStopwatch={startStopwatch}
          updatePoints={updatePoints}
        />
      )}
    </Container>
  );
}

export default Question4;
