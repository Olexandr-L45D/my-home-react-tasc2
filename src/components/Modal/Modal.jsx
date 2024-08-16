
import React, { useEffect, useState } from "react";
export default function Modal({ isOpen }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // Зберігаємо ідентифікатор інтервалу в змінну of useEffect(() to interval - 2 sec
        const intervalId = setInterval(() => {
            console.log(`Interval - ${Date.now()}`);
        }, 2000);
        // useEffect(() => {
        //   console.log("on mount and on DATE change", date);
        // }, [date]);

        return () => {
            // Очищаємо інтервал за його ідентифікатором
            clearInterval(intervalId);
        };
    }, []);

    return <div>
        <div>Modal</div>
        <button onClick={() => setDate(new Date())}>
            Date: {date.toLocaleTimeString()}
        </button>
    </div>
};
