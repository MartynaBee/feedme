import React from "react";
import {  Calendar } from 'antd';
import moment from 'moment';
import jsonDietData from './API/diet.json';
import Diet from "./Diet";

const DietaryInformation = ({ }) => {


    const onChange = (e) => {
        const { className, textContent } = e.target;
    }

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }

    const disabledDate = (current) => {
        return current && (current < moment().startOf('day') || current > moment().add(6, 'days').endOf('day'));
    };


    return (

        <div className="diet-container">
            <div className="diet-title">

                <div className="calendar">
                    <div>
                        <Calendar
                            fullscreen={false}
                            onPanelChange={onPanelChange}
                            className="calendar-container"
                            disabledDate={disabledDate}
                        />
                    </div>
                </div>

                <div>
                    <h1>DIETARY INFORMATION</h1>
                    <div>
                        <div className="diet-type">
                            {jsonDietData.map((diet, index) => (
                                <Diet key={index} diet={diet} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default DietaryInformation