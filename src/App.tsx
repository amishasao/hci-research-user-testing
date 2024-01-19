import NavbarTop from "./NavbarTop";
import Instructions from "./Instructions";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";
import Question1 from "./Question1";
import Results from "./Results";
import { Button } from "react-bootstrap";

function App() {
  const [mainMap, setMainMap] = useState({}); // [questionNumber, pointValue]

  const [showResults, setShowResults] = useState(false); // State to control visibility
  const [stopwatchMap, setStopwatchMap] = useState({}); // [questionNumber, time]
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const [name, setName] = useState("John Doe");
  const handleNext = () => {
    // Perform any necessary logic
    // Update the name
    setName("New Name");
  };

  const handleSubmit = () => {
    updatePoints(9, 0);
    updateStopwatch(9);
    setShowResults(true);
  };

  const updatePoints = (questionNumber: number, pointValue: number) => {
    setMainMap({ ...mainMap, [questionNumber]: pointValue });

    console.log(mainMap);
  };

  const updateStopwatch = (questionNumber: number) => {
    pause;
    setStopwatchMap({ ...stopwatchMap, [questionNumber]: totalSeconds });
    console.log("hi");
    reset;
  };

  const updateHeight = (height: number) => {};

  return (
    <div>
      <NavbarTop name={name} />
      <Instructions
        onNext={handleNext}
        updatePoints={updatePoints}
        pauseStopwatch={pause}
        startStopwatch={start}
        updateStopwatch={updateStopwatch}
      />

      <div
        style={{
          position: "fixed",
          bottom: 0,
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
        >
          SUBMIT
        </Button>{" "}
      </div>

      <div
        style={{
          position: "fixed",
          top: "5%",
          right: "5%",
          backgroundColor: "#f8f8f8",
          padding: "2vh",
          lineHeight: "1vh",
          borderRadius: "3vh",
          borderColor: "#000",
        }}
      >
        <Results pointsMap={mainMap} stopwatchMap={stopwatchMap} />
      </div>
    </div>
  );
}

export default App;
