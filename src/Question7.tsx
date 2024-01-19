import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import d from "./assets/d.png";
import e from "./assets/e.png";
import f from "./assets/f.png";
import Question8 from "./Question8";

type Question7Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question7({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question7Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showQuestion8, setShowQuestion8] = useState(false); // State to control visibility
  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row"); // Explicitly define the type
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(7);

    // Update the score based on the user's choice
    const score = choice === "choice4" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(7, score);

    setShowQuestion8(true);
    setFlexDirection("column");
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(7, 0);
    updateStopwatch(7);
    setShowQuestion8(true);
    setFlexDirection("column");
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f8f8",
        paddingTop: "8vh",
        paddingBottom: "8vh",
        flexDirection,
        display: "flex",
      }}
    >
      <Col xs={3}>
        <Row
          style={{
            marginTop: "4vh",
            fontSize: "7vh",
            fontFamily: "sans-serif",
            marginLeft: "3vh",
            textTransform: "uppercase",
            paddingRight: "3vh",
          }}
        >
          <h2
            style={{ fontFamily: "Anton", fontSize: "5.5vh", marginTop: "1vh" }}
          >
            Select the coffee article with a cover page with Coffee being
            poured.
          </h2>
        </Row>
      </Col>
      <Col xs={0.5} style={{ justifyItems: "right" }}>
        <div
          style={{
            height: "200vh",
            width: "0.2vh",
            justifySelf: "right",
            marginRight: "3vh",
            backgroundColor: "#000",
          }}
        ></div>
      </Col>
      <Col xs={3}>
        <Row>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice1")} // Pass the choice to handleNext
          >
            <img src={a} style={{ height: "90%", width: "90%" }} />
          </Button>
          <div
            style={{
              backgroundColor: "#000",
              height: "0.2vh",
              width: "100%",
              marginTop: "1.5vh",
            }}
          ></div>
        </Row>
        <Row style={{ marginTop: "2vh" }}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice2")} // Pass the choice to handleNext
          >
            <img
              src={b}
              style={{ height: "90%", width: "90%", borderRadius: "2vh" }}
            />
          </Button>
          <div
            style={{
              backgroundColor: "#000",
              height: "0.2vh",
              width: "100%",
              marginTop: "1.5vh",
            }}
          ></div>
        </Row>
        <Row style={{ marginTop: "2vh" }}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice3")} // Pass the choice to handleNext
          >
            <img
              src={c}
              style={{ height: "90%", width: "90%", borderRadius: "2vh" }}
            />
          </Button>
          <div
            style={{
              backgroundColor: "#000",
              height: "0.2vh",
              width: "100%",
              marginTop: "1.5vh",
            }}
          ></div>
        </Row>
        <Row style={{ marginTop: "2vh" }}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice4")} // Pass the choice to handleNext
          >
            <img
              src={d}
              style={{ height: "90%", width: "90%", borderRadius: "2vh" }}
            />
          </Button>
          <div
            style={{
              backgroundColor: "#000",
              height: "0.2vh",
              width: "100%",
              marginTop: "1.5vh",
            }}
          ></div>
        </Row>
        <Row style={{ marginTop: "2vh" }}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice5")} // Pass the choice to handleNext
          >
            <img
              src={e}
              style={{ height: "90%", width: "90%", borderRadius: "2vh" }}
            />
          </Button>
          <div
            style={{
              backgroundColor: "#000",
              height: "0.2vh",
              width: "100%",
              marginTop: "1.5vh",
            }}
          ></div>
        </Row>
        <Row style={{ marginTop: "2vh" }}>
          <Button
            style={{
              backgroundColor: "#f8f8f8",
              borderColor: "#f8f8f8",
            }}
            onClick={() => handleNext("choice6")} // Pass the choice to handleNext
          >
            <img
              src={f}
              style={{ height: "90%", width: "90%", borderRadius: "2vh" }}
            />
          </Button>
        </Row>
      </Col>
      <Col xs={3} style={{ justifyContent: "left" }}>
        <Row>
          <h6 style={{ fontFamily: "monospace" }}>
            November 1, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            Make sure your coffee is as fresh as it can be.
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
          <div
            style={{ backgroundColor: "#000", height: "0.2vh", width: "100%" }}
          ></div>
        </Row>
        <Row style={{ paddingTop: "2vh" }}>
          <h6 style={{ fontFamily: "monospace" }}>
            November 2, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            The Most Common Way People Drink Noir Café
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
          <div
            style={{ backgroundColor: "#000", height: "0.2vh", width: "100%" }}
          ></div>
        </Row>
        <Row style={{ paddingTop: "2vh" }}>
          <h6 style={{ fontFamily: "monospace" }}>
            November 2, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            The Best Coffee Advent Calendars of this year
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
          <div
            style={{ backgroundColor: "#000", height: "0.2vh", width: "100%" }}
          ></div>
        </Row>
        <Row style={{ paddingTop: "2vh" }}>
          <h6 style={{ fontFamily: "monospace" }}>
            November 2, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            Coffee Beans Prepared In Four Different Ways
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
          <div
            style={{ backgroundColor: "#000", height: "0.2vh", width: "100%" }}
          ></div>
        </Row>
        <Row style={{ paddingTop: "2vh" }}>
          <h6 style={{ fontFamily: "monospace" }}>
            November 2, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            The Baristan Kettle is a Beacon for Preparation
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
          <div
            style={{ backgroundColor: "#000", height: "0.2vh", width: "100%" }}
          ></div>
        </Row>
        <Row style={{ paddingTop: "2vh" }}>
          <h6 style={{ fontFamily: "monospace" }}>
            November 2, 2022 | cortado
          </h6>
          <h2
            style={{
              fontFamily: "Anton",
              textTransform: "uppercase",
              fontSize: "5vh",
            }}
          >
            The World’s Best Coffee Tours: Brasil, Columbi
          </h2>
          <h5 style={{ fontFamily: "Anton", marginTop: "3.25vh" }}>
            Read More ~
          </h5>
        </Row>
      </Col>
      <Col xs={1.5}>
        <Row>
          <Button
            style={{
              marginLeft: "14vh",
              fontSize: 25,
              fontFamily: "Inter",
              textTransform: "uppercase",
              letterSpacing: 1,
              paddingLeft: "3vh",
              paddingRight: "3vh",
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
      {showQuestion8 && (
        <Question8
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

export default Question7;
