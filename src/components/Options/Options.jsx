// Options
import { useState, useEffect } from "react";
import css from "./Options.module.css"

export default function Options(

) {
    const handleClick = ((event) => {
        console.log("You can see me only once!");
    });

    const [clicks, setClicks] = useState(0);
    const [clicksA, setUzer] = useState(0);

    useEffect(() => {
        console.log("You can see me only once!");
    }, []);

    useEffect(() => {
        console.log("Clicks updated: ", clicks);
    }, [clicks]);

    useEffect(() => {
        document.title = 'You clicked ${ clicks } times';
    });
    const resetClick = () => { setClicks(0) }
    return (
        <div className={css.container}>
            <div className={css.tables}>
                <button onClick={handleClick}>Clic me</button>
                <button className={css.button} onClick={() => setClicks(clicks + 1)}>
                    Good {clicks}
                </button>
                <button className={css.button} onClick={() => setUzer(clicks + 1)}>
                    Neutral,Uzer {clicksA}
                </button>
                <button className={css.button} onClick={() => setClicks(clicks + 1)}>
                    Bad {clicks}
                </button>
                <button className={css.button} onClick={resetClick}>
                    Reset
                </button>
            </div>

        </div>)
}

