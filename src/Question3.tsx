import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import pouring from "./assets/pouringCoffee.png";
import q from "./assets/c1.png";
import a1 from "./assets/c2.png";
import a2 from "./assets/c3.png";
import a3 from "./assets/c4.png";
import a4 from "./assets/c5.png";
import Question4 from "./Question4";

type Question3Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question3({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question3Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion4, setShowQuestion4] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(3);

    // Update the score based on the user's choice
    const score = choice === "choice2" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(3, score);

    setShowQuestion4(true);
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(3, 0);
    updateStopwatch(3);
    setShowQuestion4(true);
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f8f8",
        border: "box",
        margin: 0,
        height: "117vh",
        paddingTop: "10vh",
      }}
    >
      <Row>
        <Col xs={10}></Col>
        <Col
          xs={2}
          style={{
            justifyContent: "right",
          }}
        >
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
      <Row
        style={{
          alignItems: "center",
        }}
      >
        <Col xs={1}>
          <img
            style={{ width: "80%", height: "110%", backgroundColor: "#f8f8f8" }}
            src={q}
          />
        </Col>
        <Col xs={1}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img
              style={{
                width: "80%",
                height: "110%",
                backgroundColor: "#f8f8f8",
              }}
              src={a1}
            />
          </Button>
        </Col>
        <Col xs={1}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img
              style={{
                width: "80%",
                height: "110%",
              }}
              src={a2}
            />
          </Button>
        </Col>
        <Col xs={1}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img
              style={{
                width: "80%",
                height: "110%",
                backgroundColor: "#f8f8f8",
              }}
              src={a3}
            />
          </Button>
        </Col>
        <Col xs={1}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice4")} // Pass the choice to handleNext
          >
            <img
              style={{
                width: "80%",
                height: "110%",
                backgroundColor: "#f8f8f8",
              }}
              src={a4}
            />
          </Button>
        </Col>
        <Col
          xs={7}
          className="justify-content-end"
          style={{ justifyContent: "right" }}
        >
          <img style={{ width: "70%", height: "70%" }} src={pouring} />
        </Col>
      </Row>
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion4 && (
        <Question4
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

export default Question3;
