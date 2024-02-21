import React from "react";
import { Calendar, Alert, Space } from 'antd';
import moment from 'moment';
import jsonDietData from './API/diet.json';
import Diet from "./Diet";

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
};



const DietaryInformation = ({ }) => {

    const onChange = (e) => {
        const { className, textContent } = e.target;
    }

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }


    //NEW get current date
    const currentDateAndTime = new Date();

    const year = currentDateAndTime.getFullYear();
    const month = currentDateAndTime.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDateAndTime.getDate();
    const hours = currentDateAndTime.getHours();
    const minutes = currentDateAndTime.getMinutes();
    const seconds = currentDateAndTime.getSeconds();

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDateTime);

    const todayAfter4 = moment().set({ hour: 16, minute: 0, second: 0, millisecond: 0 });



    //NEW compare date time with current time
    const isCalendarDateTimeCurrentDateTime = (pCalendarDate) => {
        return (pCalendarDate && pCalendarDate.isSame(moment().startOf('day')))
    }


    //OLD
    const isCalendarDateLessThanToday = (pCalendarDate) => {
        return (pCalendarDate && pCalendarDate.isBefore(moment().startOf('day')))
    }

    const isCalendarDateEqualToTomorrow = (pCalendarDate) => {
        const tomorrow = moment().add(1, 'day');
        return true;
    }


    // //NEW Step 1- should i block tomorrow -> if after 4pm today
    // const shouldBlockTomorrow = () => {
    //     if (todayAfter4) {
    //         return true
    //     }
    // }

    // //NEW is pCalendar equal to tomorrow?
    // const isPCalendarEqualToTomorrow = (pCalendar, tomorrow) => {
    //     if (pCalendarDate === tomorrow) {
    //         return true
    //     }
    // }

    //'current' is a dynamic value that is provided by calling the function

    const disabledDate = (current) => {

        console.log(" current test martyna", current)


        //NEW
        if (isCalendarDateTimeCurrentDateTime > todayAfter4) {
            return true;
        }




        //OLD
        if (isCalendarDateLessThanToday(current)) {
            return true;
        }

        if (isCalendarDateEqualToTomorrow(current)) {
            return true;
        }

        // otherwise false means the date is enabled
        return false;

    };





    return (
        <div className="error">
            <Space>
                <Alert
                    description="All selections have to be made the day prior, before 4:00PM"
                    type="error"
                    closable
                    onClose={onClose}
                    style={{
                        border: '2px solid red', borderRadius: '8px',
                        fontSize: '20px'
                    }} />
            </Space>

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
        </div>
    )
}


export default DietaryInformation



// const endOfDay = moment().endOf('day');
// const todayAfter4 = moment().set({ hour: 16, minute: 0, second: 0, millisecond: 0 });
// const tomorrow = moment().add(1, 'day');


// //check whether a given date (current) is before today or after 6 days from today and will disable it (true)
// if (
//     (current && current.isBefore(moment().startOf('day'))) ||
//     (current && current.isAfter(moment().add(6, 'days').endOf('day')))
// ) {
//     return true;
// };
// //check whether the given date (current) is the same day as the current date and will disable the current date
// if (current && current.isSame(moment(), 'day')) {
//     return true
// };



// if (todayAfter4){
//   disabledDate.tomorrow = true
// }