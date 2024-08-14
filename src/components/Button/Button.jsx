// Button
// import { useState, updateX } from "react";
// import css from "./Options.module.css"
import { useState, useEffect } from "react";
export default function Button() {
    const [values, setValues] = useState({
        x: 0,
        y: 0,
        z: 0
    });
    const [total, setTotal] = useState(0);
    useEffect(() => {
        console.log("You can see me only once!");
    }, []);
    const updateX = () => {
        setValues({
            ...values,
            x: values.x + 1
        });
    };
    const updateY = () => {
        setValues({
            ...values,
            y: values.y + 1
        });
    };
    const updateZ = () => {
        setValues({
            ...values,
            z: values.z + 1
        });
    };
    const updateTotal = () => {
        setValues({
            ...values,
            total: values.x + values.y + values.z,
        });
    };

    return (
        <div>

            <button onClick={updateX}>Good x</button>
            <button onClick={updateY}>Neutral y</button>
            <button onClick={updateZ}>Bad z</button>
            <button onClick={updateTotal}></button>
            {/* <button onClick={updatePositive}></button> */}
            {/* <button onClick={() => setTotal(x + y + z)}>Total: {total}</button> */}

            <p>x: {values.x} </p>
            <p>y: {values.y}</p>
            <p>z: {values.z}</p>
            <p>Total: {values.x + values.y + values.z}</p>
            {/* <p>Positive: {positive}</p> */}

        </div>
    );
}