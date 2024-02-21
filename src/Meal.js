import React from "react";
import { Checkbox } from "antd";
import  jsonMealData from './API/meal.json';
// import jsonDietData from './API/diet.json';

const Meal = () => {

    const onChange = () => {

    }
    const meals = jsonMealData;




    return (
        <div className="meal-header">
            {meals.map((meal, index) => (

                <div className="meal">
                    {meal.mealName}
                    <div className="drinks-additions">
                        <div>
                            <div className="drinks">Drinks</div>
                            <div className="drink-items">
                            {meal.drinks.map((drink, drinkIndex) => (
                                    <Checkbox key={drinkIndex} onChange={onChange}>{drink}</Checkbox>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="additions">Additions</div>
                            <div className="addition-items">
                            {meal.additions.map((addition, additionIndex) => (
                                    <Checkbox key={additionIndex} onChange={onChange}>{addition}</Checkbox>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="main-sides">
                            <div>
                                <div className="main">Main</div>
                                <div className="main-items">
                                {meal.mainItems.map((mainItem, mainIndex) => (
                                        <Checkbox key={mainIndex} onChange={onChange}>{mainItem}</Checkbox>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="sides">Sides</div>
                                <div className="side-items">


                                {meal.sideItems.map((sideItem, sideIndex) => (
                                        <Checkbox key={sideIndex} onChange={onChange}>{sideItem}</Checkbox>
                                    ))}

                                </div>
                            </div>

                            <div>
                                <div className="replacement">Ensure Meal Replacement
                                    <div className="replacement-options">
                                        {meal.replacementOptions.map((replacementOption, replacementIndex) => (
                                            <Checkbox key={replacementIndex} onChange={onChange}>{replacementOption}</Checkbox>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>







                </div>
            ))}

        </div>
    )
}

export default Meal; 