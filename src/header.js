import React, { useState, useEffect } from "react";



const Header = ({ hospitalName, patientName, hospitalLogo, dayOfWeek }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    },
        []);




    return (

        <div className="masterhead">

            <div className="company-banner">
                <img src="./WBlogo.png"></img>
            </div>


            <div className="sub-head">

                <div class="block">
                    <div className="logo-name">
                        <img src={hospitalLogo} className="small-logo"></img>
                        <p className="hospital-name">{hospitalName}</p>
                    </div>
                </div>

                <div class="block">
                    <div className="hello">
                        <p>Hello, {patientName}!</p>
                    </div>
                </div>

                <div class="block">
                    <div className="time-date">
                        <p>{currentTime.toDateString()}</p>
                        <p>{currentTime.toLocaleTimeString()}</p>
                    </div>
                </div>

            </div>

        </div>



    )
}



export default Header;