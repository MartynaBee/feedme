import { Checkbox } from "antd";
import React from "react";

// code for the specific Diet Details, that occur under the Diet Type
const DietDetail = ({dietDetail}) => {

    return (
        
        <div><Checkbox>{dietDetail.label}</Checkbox> </div>
    )
}

export default DietDetail;