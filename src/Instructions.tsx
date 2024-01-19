import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Question1 from "./Question1";
import "./index.css";

type InstructionsProps = {
  onNext: () => void;
  updatePoints: (question: number, score: number) => void;
  pauseStopwatch: () => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
};

function Instructions({
  onNext,
  updatePoints,
  updateStopwatch,
  pauseStopwatch,
  startStopwatch,
}: InstructionsProps) {
  const [codeName, setCodeName] = useState(""); // State for code name
  const [showQuestion1, setShowQuestion1] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  useEffect(() => {
    // Scroll to the Question1 component after it's rendered
    if (questionRef.current && showQuestion1) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showQuestion1]);

  const handleNext = () => {
    // You can perform any necessary logic here before scrolling
    setShowQuestion1(true); // Show Question1
    startStopwatch;
    onNext(); // Call the onNext function passed as a prop
  };

  return (
    <Container fluid>
      <Row>
        <Col style={{ backgroundColor: "#AAA", height: "100vh" }}></Col>
        <Col xs={9}>
          <div>
            <h1
              style={{
                fontSize: "8vh",
                fontFamily: "Anton",
                marginTop: "1vh",
              }}
            >
              Welcome to the Study
            </h1>
            <p style={{ fontSize: "6vh", fontFamily: "Alumni Sans" }}>
              <span style={{ fontWeight: "bold", color: "#8B4D1D" }}>
                Instructions:
              </span>{" "}
              The following sections consist of multiple-choice image-based
              questions. The questions will test your ability to understand the
              text as a result of your response time & accuracy. Select what you
              believe to be the correct answer. You may click the skip button to
              skip a question. Click ‘Next’ to start the timer & take you to the
              1st section.
            </p>

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Code Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter code name"
                    value={codeName}
                    onChange={(e) => setCodeName(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    fontSize: 25,
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                  onClick={handleNext}
                  variant="light"
                >
                  Next
                </Button>{" "}
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      {/* Placeholder for scrolling to Question1 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question1 based on showQuestion1 state */}
      {showQuestion1 && (
        <Question1
          updatePoints={updatePoints}
          updateStopwatch={updateStopwatch}
          startStopwatch={startStopwatch}
        />
      )}
    </Container>
  );
}

export default Instructions;
