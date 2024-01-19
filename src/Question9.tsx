import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";
import rightImg from "./assets/rightImg.png";
import Results from "./Results";

type Question9Props = {
  updatePoints: (question: number, score: number) => void;
  startStopwatch: () => void;
  updateStopwatch: (question: number) => void;
  onNext: () => void;
};

function Question9({
  onNext,
  updatePoints,
  startStopwatch,
  updateStopwatch,
}: Question9Props) {
  const [ans, setAns] = useState(""); // State for user's choice
  const [showResults, setShowResults] = useState(false); // State to control visibility
  const questionRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  function handleNext(choice: string) {
    // Save the user's choice
    setAns(choice);
    updateStopwatch(9);

    // Update the score based on the user's choice
    const score = choice === "choice5" ? 1 : 0;

    // Pass the score to the parent component
    updatePoints(9, score);

    setShowResults(true);
    // Scroll to the Question4 component
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    startStopwatch;
  }

  const handleSkip = () => {
    updatePoints(9, 0);
    updateStopwatch(9);
    setShowResults(true);
    startStopwatch;
  };

  return (
    <Container
      fluid
      style={{ backgroundColor: "#fff", height: "100%", display: "flex" }}
    >
      <Col xs={6} style={{ textAlign: "center" }}>
        <Row>
          <div
            style={{
              padding: "2vh",
              borderColor: "#000",
              borderWidth: "0.2vh",
              borderStyle: "dotted",
            }}
          >
            <div
              style={{
                padding: "2vh",
                borderColor: "#000",
                borderWidth: "0.2vh",
                borderStyle: "dotted",
              }}
            >
              <Row>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => handleNext("choice1")} // Pass the choice to handleNext
                >
                  <h4 style={{ fontFamily: "Anton", marginTop: "1vh" }}>
                    Caffe latte ~
                    <span style={{ fontFamily: "monospace" }}> $5.00</span>
                  </h4>
                  <h6 style={{ fontFamily: "monospace" }}>
                    Fresh brewed coffee
                  </h6>
                  <div
                    style={{
                      height: "0.1vh",
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  ></div>
                </Button>
              </Row>
              <Row>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => handleNext("choice2")} // Pass the choice to handleNext
                >
                  <h4 style={{ fontFamily: "Anton", marginTop: "1vh" }}>
                    Cappucino ~
                    <span style={{ fontFamily: "monospace" }}>$7.00</span>
                  </h4>
                  <h6 style={{ fontFamily: "monospace" }}>Espresso and milk</h6>
                  <div
                    style={{
                      height: "0.1vh",
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  ></div>
                </Button>
              </Row>
              <Row>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => handleNext("choice3")} // Pass the choice to handleNext
                >
                  <h4 style={{ fontFamily: "Anton", marginTop: "1vh" }}>
                    Ice coffee ~
                    <span style={{ fontFamily: "monospace", marginTop: "1vh" }}>
                      $4.80
                    </span>
                  </h4>
                  <h6 style={{ fontFamily: "monospace" }}>
                    Cold brewed espresso
                  </h6>
                  <div
                    style={{
                      height: "0.1vh",
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  ></div>
                </Button>
              </Row>
              <Row>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => handleNext("choice4")} // Pass the choice to handleNext
                >
                  <h4 style={{ fontFamily: "Anton", marginTop: "1vh" }}>
                    Ice coffee ~
                    <span style={{ fontFamily: "monospace", marginTop: "1vh" }}>
                      $7.00
                    </span>
                  </h4>
                  <h6 style={{ fontFamily: "monospace" }}>
                    Cold brewed espresso
                  </h6>
                  <div
                    style={{
                      height: "0.1vh",
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  ></div>
                </Button>
              </Row>
              <Row>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => handleNext("choice5")} // Pass the choice to handleNext
                >
                  <h4 style={{ fontFamily: "Anton", marginTop: "1vh" }}>
                    Espresso ~
                    <span style={{ fontFamily: "monospace", marginTop: "1vh" }}>
                      $4.00
                    </span>
                  </h4>
                  <h6 style={{ fontFamily: "monospace" }}>
                    Rich espresso with milk
                  </h6>
                  <div
                    style={{
                      height: "0.1vh",
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  ></div>
                </Button>
              </Row>
            </div>
          </div>
        </Row>
      </Col>
      <Col xs={6}>
        <Row>
          <div
            style={{
              backgroundImage: `url(${rightImg})`,
              height: "60vh",
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Mansalva",
                color: "#FBED81",
                fontSize: "7vh",
                justifySelf: "center",
              }}
            >
              Choose the least expensive coffee on the list.
            </h2>
          </div>
        </Row>
      </Col>
      {/* <Col>
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
            marginTop: "2vh", // Add margin top
          }}
          variant="light"
          onClick={handleSkip} // Use handleSkip for the button
        >
          SUBMIT
        </Button>{" "}
      </Col> */}
      {/* <Col xs={6} ref={questionRef}> */}
      {/* Conditionally render Results based on showResults state */}
      {/* {showResults && (
          <Results
            pointsMap={{}} // Pass the pointsMap if needed
            stopwatchMap={{}} // Pass the stopwatchMap if needed
          />
        )} */}
      {/* </Col> */}
    </Container>
  );
}

export default Question9;
