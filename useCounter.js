import { useState } from 'react';

const useCounter = (initState = 0) => {
    const [counter, setCounter] = useState(initState);
    return [counter,
        () => {
            setCounter((current) => current + 1)  //increment
        },
        () => {
            setCounter((current) => current - 1)  //decrement
        },
    ]
}

export default useCounter;
