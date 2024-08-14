// Options
import css from "./Options.module.css"
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification"
export default function Options() {
    const [values, setValues] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const updateX = () => {
        setValues({
            ...values,
            good: values.good + 1
        });
    };
    const updateY = () => {
        setValues({
            ...values,
            neutral: values.neutral + 1
        });
    };
    const updateZ = () => {
        setValues({
            ...values,
            bad: values.bad + 1
        });
    };
    const updateTotal = () => {
        setValues({
            ...values,
            total: values.good + values.neutral + values.bad,
        });
    };
    const resetClick = () => { setValues(0) };
    // second example
    const handleClick = (evt) => {
        console.log(evt);
    };

    return (
        <>
            {/* second example */}
            <button onClick={handleClick}>First button</button>
            <button onClick={evt => console.log(evt)}>Second button</button>

            <Notification />

            <div>
                <button onClick={updateX} className={css.button}>Good </button>
                <button onClick={updateY} className={css.button}>Neutral </button>
                <button onClick={updateZ} className={css.button}>Bad </button>
                <button onClick={resetClick} className={css.button}>Reset</button>
                <button onClick={updateTotal} ></button>

            </div>

        </>
    );
}


// className={css.button}
// const [clicks] = useState(0);

// useEffect(() => {
//     console.log("You can see me only once!");
// }, []);

// useEffect(() => {
//     console.log("Clicks updated: ", clicks);
// }, [clicks]);

// useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
// });
// export default function Options(
//     { updateFeedback, totalFeedback }
// ) {
//     return (
//         <div className={css.container}>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Good {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Neutral {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Bad {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Reset {clicks}
//             </button>
//         </div>)
// }
//  {/* <p>Positive: {positive}</p> */}