import React from "react";


const Diet = ({ }) => {

    return (
        <div className="diet-container">
            <div className="diet-title">
                <div>
                    <h1>DIETARY INFORMATION</h1>
                </div>

                <div className="eight-columns">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" />Allergic</th>
                                <th><input type="checkbox" />Cardiac</th>
                                <th><input type="checkbox" />Diabetic</th>
                                <th><input type="checkbox" />Gluten-free</th>
                                <th><input type="checkbox" />Lactose-free</th>
                                <th><input type="checkbox" />Vegan</th>
                                <th><input type="checkbox" />Vegetarian</th>
                                <th><input type="checkbox" />Dysphagic</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"></input>egg</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>liquid-thin</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input>fish</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>nectar-thick</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input>nut</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>honey-thick</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></input>soy</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>pudding-thick</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>pureed</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>minced</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="checkbox"></input>soft</td>
                            </tr>


                        </tbody>

                    </table>
                </div>


            </div>
        </div>
    )

}

export default Diet; 