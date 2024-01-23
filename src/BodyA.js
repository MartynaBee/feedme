import React from "react";
import { Checkbox } from 'antd';


const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const BodyA = ({ }) => {

    return (
        <div className="outer-menu-container">
            <div className="menu-container">

                <div className="meal">Breakfast
                    <div className="drinks-additions">
                        <div>
                            <div className="drinks">Drinks</div>
                            <div className="drink-items">
                            <Checkbox onChange={onChange} >apple juice</Checkbox>
                            <Checkbox onChange={onChange} >orange juice</Checkbox>
                            <Checkbox onChange={onChange} >prune juice</Checkbox>
                            <Checkbox onChange={onChange} >tea</Checkbox>
                            <Checkbox onChange={onChange} >coffee</Checkbox>
                            <Checkbox onChange={onChange} >milk</Checkbox>
                            
                            </div>
                        </div>
                        <div>
                            <div className="additions">Additions</div>

                            <div className="addition-items">
                            
                            <Checkbox onChange={onChange} >milkette</Checkbox>
                            <Checkbox onChange={onChange} >cream</Checkbox>
                            <Checkbox onChange={onChange} >honey</Checkbox>
                            <Checkbox onChange={onChange} >sugar</Checkbox>
                            <Checkbox onChange={onChange} >Splenda</Checkbox>
                               


                            </div>
                        </div>
                    </div>
                </div>

                


                <div className="meal">Lunch
                    <div className="drinks-additions">


                        <div>
                            <div className="drinks">Drinks</div>
                            <div className="drink-items">
                                <div><input type="checkbox"></input>apple juice</div>
                                <div><input type="checkbox"></input>orange juice</div>
                                <div><input type="checkbox"></input>prune juice</div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="additions">Additions</div>
                            <div className="addition-items">
                                <div><input type="checkbox"></input>milk</div>
                                <div><input type="checkbox"></input>milkette</div>
                                <div><input type="checkbox"></input>cream</div>
                                <div><input type="checkbox"></input>honey</div>
                                <div><input type="checkbox"></input>sugar</div>
                                <div><input type="checkbox"></input>Splenda</div>


                            </div>
                        </div>


                    </div>
                </div>

                <div className="meal">Dinner
                    <div className="drinks-additions">
                        <div>
                            <div className="drinks">Drinks</div>
                            <div className="drink-items">
                                <div><input type="checkbox"></input>apple juice</div>
                                <div><input type="checkbox"></input>orange juice</div>
                                <div><input type="checkbox"></input>prune juice</div>
                            </div>
                        </div>
                        <div>
                            <div className="additions">Additions</div>

                            <div className="addition-items">
                                <div><input type="checkbox"></input>milk</div>
                                <div><input type="checkbox"></input>milkette</div>
                                <div><input type="checkbox"></input>cream</div>
                                <div><input type="checkbox"></input>honey</div>
                                <div><input type="checkbox"></input>sugar</div>
                                <div><input type="checkbox"></input>Splenda</div>


                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}


export default BodyA; 