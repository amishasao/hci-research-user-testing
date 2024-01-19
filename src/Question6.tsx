import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import emp1 from "./assets/emp1.png";
import emp2 from "./assets/emp2.png";
import emp3 from "./assets/emp3.png";
import emp4 from "./assets/emp4.png";
import emp5 from "./assets/emp5.png";
import emp6 from "./assets/emp6.png";
import Question7 from "./Question7";

type Question6Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question6({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question6Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion7, setShowQuestion7] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(6);

    // Update the score based on the user's choice
    const score = choice === "choice6" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(6, score);

    setShowQuestion7(true);
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(6, 0);
    updateStopwatch(6);
    setShowQuestion7(true);
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        display: "block",
        flexDirection: "column",
        backgroundColor: "#fff",
        paddingTop: "8vh",
        height: "85vh",
      }}
    >
      <Row
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
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
        <Col
          xs={8}
          style={{
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            paddingLeft: "5vh",
          }}
        >
          <h2
            style={{
              fontFamily: "Anton",
              fontSize: "6vh",
              marginTop: "1vh",
              marginBottom: "1vh",
            }}
          >
            Which of these coffee shop employees Is not wearing any accessories?
          </h2>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={emp1} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              eb morris
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Chef</h6>
          </Button>
        </Col>
        <Col>
          <div
            style={{
              height: "35vh",
              width: ".13vh",
              backgroundColor: "#000",
              justifyContent: "center",
            }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img src={emp2} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              tom splinder
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Manager</h6>
          </Button>
        </Col>
        <Col>
          <div
            style={{
              height: "35vh",
              width: ".13vh",
              backgroundColor: "#000",
            }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img src={emp3} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              laura simmons
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Pastry Chef</h6>
          </Button>
        </Col>
        <Col>
          <div
            style={{
              height: "35vh",
              width: ".13vh",
              backgroundColor: "#000",
            }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice4")} // Pass the choice to handleNext
          >
            <img src={emp4} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              jonas hanks
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Media manager</h6>
          </Button>
        </Col>
        <Col>
          <div
            style={{
              height: "35vh",
              width: ".13vh",
              backgroundColor: "#000",
            }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice5")} // Pass the choice to handleNext
          >
            <img src={emp5} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              ed morris
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Chef</h6>
          </Button>
        </Col>
        <Col>
          <div
            style={{
              height: "35vh",
              width: ".13vh",
              backgroundColor: "#000",
            }}
          ></div>
        </Col>
        <Col>
          <Button
            style={{
              backgroundColor: "#fff",
              borderColor: "#fff",
            }}
            onClick={() => handleNext("choice6")} // Pass the choice to handleNext
          >
            <img src={emp6} style={{ height: "25vh" }} />
            <h4
              style={{
                fontFamily: "Anton",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2vh",
              }}
            >
              rita flams
            </h4>
            <h6 style={{ fontFamily: "monospace" }}>Sales person</h6>
          </Button>
        </Col>
      </Row>
      <hr />
      {/* Placeholder for scrolling to Question2 */}
      <div ref={questionRef}></div>

      {/* Conditionally render Question2 based on showQuestion2 state */}
      {showQuestion7 && (
        <Question7
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

export default Question6;
