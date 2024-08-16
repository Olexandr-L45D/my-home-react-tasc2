
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"
import Modal from "../Modal/Modal"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(() => {
    const savClicks = window.localStorage.getItem("m-click");
    return savClicks !== null ? JSON.parse(savClicks) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  }

  const resetValue = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <>
        <Description />
        <Options updateFeedback={updateFeedback} resetValue={resetValue} totalFeedback={totalFeedback} />
        {totalFeedback > 0 ? <Feedback values={values} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} /> : <Notification />}
      </>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open Modal"}
        </button>
        {isOpen && <Modal isOpen={isOpen} />}
      </div>
    </div>
  )
}
