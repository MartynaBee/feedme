import React from "react";
import { Checkbox } from 'antd';
import MealContainer from "./MealContainer";

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const BodyA = ({ }) => {

    return (
        <div className="outer-menu-container">
            <MealContainer></MealContainer>
        </div>
    )
}


export default BodyA; 