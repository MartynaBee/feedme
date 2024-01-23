import React from "react";
import { Checkbox } from 'antd';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const listOfDrinks = [
    { id: 1, content: 'apple juice', selected: false },
    { id: 2, content: 'orange juice', selected: false },
    { id: 3, content: 'prune juice', selected: false},
    { id: 3, content: 'tea', selected: false},
    { id: 3, content: 'coffee', selected: false},
    { id: 3, content: 'milk', selected: false},
    // ...more elements
  ];


const BodyC = ({ }) => {
    return (

        <div>
        {listOfDrinks.map((element) => (
          <div key={element.id}>
            <Checkbox onChange={onChange} ></Checkbox>
            <p>{element.content}</p>
            {/* Add more JSX elements or content here */}
          </div>
        ))}
      </div>


    )
}


export default BodyC; 








                {/* <div className="eight-columns">
                    <table>
                        <thead >
                            <tr >
                                <th><Checkbox onChange={onChange} className="diet-type">Allergic</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Cardiac</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Diabetic</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Gluten-free</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Lactose-free</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Vegan</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Vegetarian</Checkbox></th>
                                <th><Checkbox onChange={onChange} className="diet-type">Dysphagic</Checkbox></th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Checkbox onChange={onChange} className="diet-details">egg</Checkbox></th>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange} className="diet-details">liquid-thin</Checkbox></th>

                            </tr>
                            <tr>
                                <th><Checkbox onChange={onChange}>fish</Checkbox></th>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>nectar-thick</Checkbox></th>

                            </tr>
                            <tr>
                                <th><Checkbox onChange={onChange}>nut</Checkbox></th>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>honey-thick</Checkbox></th>

                            </tr>
                            <tr>
                                <th><Checkbox onChange={onChange}>soy</Checkbox></th>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>pudding-thick</Checkbox></th>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>pureed</Checkbox></th>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>minced</Checkbox></th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th><Checkbox onChange={onChange}>soft</Checkbox></th>

                            </tr>


                        </tbody>

                    </table>
                </div> */}