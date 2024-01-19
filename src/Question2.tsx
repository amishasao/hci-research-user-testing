import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import shop1 from "./assets/shop1.png";
import shop2 from "./assets/shop2.png";
import bg from "./assets/bg.png";
import shop3 from "./assets/shop3.png";
import shop4 from "./assets/shop4.png";
import Question3 from "./Question3";

type Question2Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question2({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question2Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion3, setShowQuestion3] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(2);

    // Update the score based on the user's choice
    const score = choice === "choice1" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(2, score);

    setShowQuestion3(true);
    // Scroll to the Question3 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(2, 0);
    updateStopwatch(2);
    setShowQuestion3(true);
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bg})`,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
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
            fontSize: 45,
            fontFamily: "sans-serif",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              height: "30vh",
              width: "70vw",
              padding: "5vh",
              borderRadius: "5vh",
              backgroundColor: "#ECF3FB",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                color: "#5C6A3C",
                fontSize: "9vh",
                marginTop: "1vh",
              }}
            >
              Select the green coffee shop
            </h2>
          </div>
        </Col>
        <Col
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
      <Row>
        <Col>
          <Button
            style={{
              marginTop: "6vh",
              backgroundColor: "#D9D9D9",
              padding: "2vh",
              width: "32vh",
              borderRadius: "3vh",
              borderColor: "#d9d9d9",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={shop1} style={{ height: "30vh" }} />
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              marginTop: "24vh",
              backgroundColor: "#D9D9D9",
              padding: "2vh",
              width: "32vh",
              borderRadius: "3vh",
              borderColor: "#d9d9d9",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img src={shop2} style={{ height: "30vh" }} />
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              marginTop: "6vh",
              backgroundColor: "#D9D9D9",
              padding: "2vh",
              width: "32vh",
              borderRadius: "3vh",
              borderColor: "#d9d9d9",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img src={shop3} style={{ height: "30vh" }} />
          </Button>
        </Col>
        <Col>
          <Button
            style={{
              marginTop: "24vh",
              backgroundColor: "#D9D9D9",
              padding: "2vh",
              width: "32vh",
              borderRadius: "3vh",
              borderColor: "#d9d9d9",
            }}
            onClick={() => handleNext("choice4")} // Pass the choice to handleNext
          >
            <img src={shop4} style={{ height: "30vh" }} />
          </Button>
        </Col>
      </Row>
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion3 && (
        <Question3
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

export default Question2;
