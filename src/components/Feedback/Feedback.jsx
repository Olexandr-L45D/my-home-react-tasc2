// Feedback
import css from "./Feedback.module.css"
import { useState, useEffect } from "react";
// import { updateX, updateY, updateZ, updateTotal } from "../Options/Options"
export default function Feedback(
    // { values: { good, neutral, bad }, setValues },
) {
    const [values, setValues] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    return (
        <>

            <p className={css.paragrText}>Good: {values.good}</p>
            <p className={css.paragrText}>Neutral: {values.neutral}</p>
            <p className={css.paragrText}>Bad: {values.bad}</p>
            <p className={css.paragrText}>Total: {values.good + values.neutral + values.bad}</p>


        </>
    )
}
// // const totalFeedback = good + neutral + bad;
// const updateFeedback = feedbackType => {
//     // Тут використовуй сеттер, щоб оновити стан
// }
// Math.round((good / totalFeedback) * 100)