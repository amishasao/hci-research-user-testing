import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import words from "./assets/words.png";
import Question6 from "./Question6";

type Question5Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question5({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question5Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion6, setShowQuestion6] = useState(false); // State to control visibility
  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row"); // Explicitly define the type
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(5);

    // Update the score based on the user's choice
    const score = choice === "choice3" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(5, score);

    setShowQuestion6(true);
    setFlexDirection("column");
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(5, 0);
    updateStopwatch(5);
    setShowQuestion6(true);

    setFlexDirection("column");
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#FDF1D9",
        padding: "10vh",
        flexDirection,
        display: "flex",
      }}
    >
      <Col xs={4}>
        <Row>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "6.5vh",
            }}
          >
            how many words are in this image?
          </h2>
        </Row>
        <Row>
          <img src={words} style={{ height: "75%", width: "75%" }} />
        </Row>
      </Col>
      <Col xs={7}>
        <Button
          style={{
            borderWidth: ".2vh",
            borderColor: "#000",
            fontFamily: "sans-serif",
            backgroundColor: "#D9D9D9",
            padding: "4.25vh",
            width: "80vh",
            marginBottom: "3vh",
          }}
          onClick={() => handleNext("choice1")} // Pass the choice to handleNext
        >
          <h4 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            five
          </h4>
        </Button>
        <Button
          style={{
            borderWidth: ".2vh",
            borderColor: "#000",
            fontFamily: "sans-serif",
            backgroundColor: "#F1EAB0",
            padding: "4.25vh",
            width: "80vh",
            marginBottom: "3vh",
            marginLeft: "10vh",
          }}
          onClick={() => handleNext("choice2")} // Pass the choice to handleNext
        >
          <h4 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            ten
          </h4>
        </Button>
        <Button
          style={{
            borderWidth: ".2vh",
            borderColor: "#000",
            fontFamily: "sans-serif",
            backgroundColor: "#CFF1B9",
            padding: "4.25vh",
            width: "80vh",
            marginBottom: "3vh",
          }}
          onClick={() => handleNext("choice3")} // Pass the choice to handleNext
        >
          <h4 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            eleven
          </h4>
        </Button>
        <Button
          style={{
            borderWidth: ".2vh",
            borderColor: "#000",
            fontFamily: "sans-serif",
            backgroundColor: "#9FBDD9",
            padding: "4.25vh",
            width: "80vh",
            marginLeft: "10vh",
          }}
          onClick={() => handleNext("choice4")} // Pass the choice to handleNext
        >
          <h4 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            thirteen
          </h4>
        </Button>
      </Col>
      <Col>
        <Row>
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
        </Row>
      </Col>
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion6 && (
        <Question6
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

export default Question5;
