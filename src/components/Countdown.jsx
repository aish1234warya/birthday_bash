import React, { useState, useEffect } from 'react';
import './countdown.css';

const countdownStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'purple',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: '20px auto',
};



function Countdown() {

    const [count, setCount] = useState(10); // Set the initial countdown value to 10 seconds
    const [countdownOver, setCountdownOver] = useState(false);
    const [countdownTimer, setcountdownTimer] = useState(true);
    const [greet, setGreet] = useState(false);


    function greeting() {
        setCountdownOver(false);
        setcountdownTimer(false);
        setGreet(true);
    }

    useEffect(() => {
        // Exit the countdown if the count reaches 0
        if (count === 0) {
            setCountdownOver(true);
            return;
        }

        // Create the interval to decrement the countdown every second
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, [count]);

    return (
        <div>
            {countdownOver ? (
                < div className="fixed-bottom">
                    <h2 style={countdownStyle}>Gift Box</h2>
                    <img onClick={() => greeting()} src="https://img.freepik.com/free-photo/3d-render-gift-box-with-ribbon-present-package_107791-15850.jpg " alt="mypic" ></img>
                </div>
            ) : (
                countdownTimer ? <div style={countdownStyle}>{` ${count} seconds`}</div> : null
            )}
            {greet ? (<div className='greet'>
                <h1>Happy Birthday To You</h1>
                <img  className='bgImage' src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Celebrations" />
                <img className='balloons' src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-set-of-realistic-glossy-metallic-balloons-png-image_5255317.png" alt="Balloons" />
            </div>) : null}
        </div>
    );
}

export default Countdown;