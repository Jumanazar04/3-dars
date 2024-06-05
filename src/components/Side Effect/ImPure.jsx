import React, { useState, useEffect } from 'react';

// Impure component: tashqi muhit bilan ishlaydi va side effect yaratadi
const ImpureComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <h1>Current time is: {time.toLocaleTimeString()}</h1>;
};

export default ImpureComponent;
