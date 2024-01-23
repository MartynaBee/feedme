import React from "react";
import BodyA from "./BodyA";
import BodyB from "./BodyB";
import DietaryInformation from "./DietaryInformation";

const Body = ({ }) => {

    return (
        <div  >
            <div className="body">
                <div>
                    <DietaryInformation />
                </div>

                <div className="full-menu">
                    <div>
                        <BodyA></BodyA>
                    </div>

                    <div>
                        <BodyB></BodyB>
                    </div>



                </div>

            </div>
        </div>
    )
}



export default Body;