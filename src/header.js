import React from "react";


const Header = ({ hospitalName, patientName, currentDate, currentTime, hospitalLogo, dayOfWeek }) => {

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
                            <p>{currentDate}</p>
                            <p>{currentTime}</p>
                        </div>
                    </div>

                </div>

           

            <div className="thisweek">
                <h2>"Week of "<input type="week"></input>"</h2>
                <h3>{dayOfWeek}</h3>
            </div>

        </div>



    )
}


export default Header; 