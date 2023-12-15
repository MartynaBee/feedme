import React from "react";

const Footer = ({ }) => {

    return (
        <div className="outer-footer-container">
            <div className="legend-container">

                <div className="legend">
                    <div> Legend:</div>
                </div>

                <div className="icon-desc">
                    <div className="icon"><img src="./Frame (1).svg"></img>
                        <div>Vegetarian</div>
                    </div>
                    <div className="icon"><img src="./Frame.svg"></img>
                        <div>Vegan</div>
                    </div>
                    <div className="icon"><img src="./Frame (2).svg"></img>
                        <div>Allergy</div>
                    </div>
                </div>

            </div>

            <div className="submit-container">
                <div className="submit">
                    <input type="submit" className="bigger-button"></input>
                </div>
            </div>


        </div>
    )
}


export default Footer; 