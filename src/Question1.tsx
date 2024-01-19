import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./index.css";
import Question2 from "./Question2";
import choice1 from "./assets/choice1.png";
import choice2 from "./assets/choice2.png";

type Question1Props = {
  // onScoreUpdate: (score: number) => void;
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
};

function Question1({
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question1Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion2, setShowQuestion2] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(1);

    // Update the score based on the user's choice
    const score = choice === "choice2" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(1, score);

    setShowQuestion2(true);
    // Scroll to the Question2 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(1, 0);
    updateStopwatch(1);
    setShowQuestion2(true);
    startStopwatch;
  };

  return (
    <Container fluid style={{ backgroundColor: "#FDF1D9" }}>
      {/* ... (rest of the component remains the same) */}
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
            style={{
              fontFamily: "Anton",
              fontSize: "5.5vh",
              marginTop: "1vh",
            }}
          >
            Select the white bag of coffee.
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
            onClick={handleSkip} // Call the handleSkip function on "Skip" button click
          >
            Skip
          </Button>{" "}
        </Col>
      </Row>
      {/* ... (rest of the component remains the same) */}
      <Row>
        <Col>
          <Button
            style={{ backgroundColor: "#FDF1D9", borderColor: "#FDF1D9" }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={choice1} style={{ height: "37vh" }} />
          </Button>
        </Col>
        <Col>
          <Button
            style={{ backgroundColor: "#FDF1D9", borderColor: "#FDF1D9" }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img src={choice2} style={{ height: "37vh" }} />
          </Button>
        </Col>
        {/* ... (rest of the buttons remain the same) */}
        <Col>
          <Button
            style={{ backgroundColor: "#FDF1D9", borderColor: "#FDF1D9" }}
            onClick={() => handleNext("choice3")}
          >
            <img src={choice1} style={{ height: "37vh" }} />
          </Button>
        </Col>
        <Col>
          <Button
            style={{ backgroundColor: "#FDF1D9", borderColor: "#FDF1D9" }}
            onClick={() => handleNext("choice4")}
          >
            <img src={choice1} style={{ height: "37vh" }} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textTransform: "uppercase",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Robusta santa</h4>
          <h6 style={{ fontFamily: "Space Mono" }}>$35.00</h6>
        </Col>
        <Col
          style={{
            textTransform: "uppercase",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Arabica bekele</h4>
          <h6 style={{ fontFamily: "Space Mono" }}>$35.00</h6>
        </Col>
        <Col
          style={{
            textTransform: "uppercase",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Robusta santa</h4>
          <h6 style={{ fontFamily: "Space Mono" }}>$35.00</h6>
        </Col>
        <Col
          style={{
            textTransform: "uppercase",
          }}
        >
          <h4 style={{ fontWeight: "bold" }}>Robusta santa</h4>
          <h6 style={{ fontFamily: "Space Mono" }}>$35.00</h6>
        </Col>
      </Row>

      {/* ... (rest of the component remains the same) */}

      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion2 && (
        <Question2
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

export default Question1;
