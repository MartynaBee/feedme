import { Checkbox } from "antd";
import React from "react";

const DietDetail = ({dietDetail}) => {

    return (
        
        <div><Checkbox>{dietDetail.label}</Checkbox> </div>
    )
}

export default DietDetail;