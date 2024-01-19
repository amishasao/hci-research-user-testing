import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import treat1 from "./assets/treat1.png";
import treat2 from "./assets/treat2.png";
import treat3 from "./assets/treat3.png";
import bg from "./assets/bg_q8.png";
import Question9 from "./Question9";

type Question8Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question8({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question8Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion9, setShowQuestion9] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(8);

    // Update the score based on the user's choice
    const score = choice === "choice1" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(8, score);

    setShowQuestion9(true);
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(8, 0);
    updateStopwatch(8);
    setShowQuestion9(true);
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bg})`,
        height: "100%",
        paddingTop: "8vh",
        flexDirection: "column",
        display: "block",
      }}
    >
      <Row>
        <Col xs={10}></Col>
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
      <Row>
        <Col xs={3}>
          <Button
            style={{
              marginLeft: "5vh",
              backgroundColor: "#D9D9D9",
              padding: "5vh",
              borderRadius: "10vh",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={treat1} style={{ height: "100%", width: "100%" }} />
          </Button>
        </Col>
        <Col xs={3}>
          <Button
            style={{
              marginLeft: "5vh",
              backgroundColor: "#D9D9D9",
              padding: "5vh",
              borderRadius: "10vh",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img src={treat2} style={{ height: "100%", width: "100%" }} />
          </Button>
        </Col>
        <Col xs={1}></Col>
        <Col xs={5}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "5vh",
              marginRight: "6vh",
              borderRadius: "10vh",
              paddingTop: "15vh",
              paddingBottom: "15vh",
            }}
          >
            <h2
              style={{
                fontFamily: "Anton",
                textTransform: "uppercase",
                fontSize: "6vh",
              }}
            >
              select the option without any coffee.
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Button
            style={{
              marginTop: "4vh",
              marginLeft: "5vh",
              backgroundColor: "#D9D9D9",
              padding: "5vh",
              borderRadius: "10vh",
              marginBottom: "4vh",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img src={treat3} style={{ height: "100%", width: "100%" }} />
          </Button>
        </Col>
      </Row>
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion9 && (
        <Question9
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

export default Question8;
