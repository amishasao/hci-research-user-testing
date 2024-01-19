import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./index.css";

type ResultsProps = {
  pointsMap: { question: number; points: number };
  stopwatchMap: {};
};

function Results({ pointsMap, stopwatchMap }: ResultsProps) {
  return (
    // results map
    <div>
      {
        /*  print out each element in the map */
        Object.keys(pointsMap).map((key) => {
          return (
            <div>
              <p>
                {/* @ts-ignore */}
                Question {key}: {pointsMap[key].toString()} points
              </p>
            </div>
          );
        })
      }

      <hr />

      {Object.keys(stopwatchMap).map((key) => {
        return (
          <div>
            <p>
              {/* @ts-ignore */}
              Question {key}: {stopwatchMap[key].toString()} seconds
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Results;
