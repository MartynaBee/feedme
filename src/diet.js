import React, { useState  } from "react";
import DietDetail from "./DietDetail";
import { Checkbox } from "antd";

const Diet = ({ diet }) => {

    const [isActive, setIsActive] = useState(false);
    const onChange = (e) => {
        setIsActive(e.target.checked);
    };

    const listOfDietDetailComponent = diet.listOfDietDetails.map(fiDietDetail =>
        <DietDetail dietDetail={fiDietDetail} />
    );


    return (
        <div>

            <div>
                <Checkbox onChange={onChange}>{diet.dietType}</Checkbox>
            </div>
            {isActive ? listOfDietDetailComponent : null}
        </div>

    )
}

export default Diet