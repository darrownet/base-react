import React, {useState} from 'react';

import SmartButton from "./smart-button/SmartButton";
import SmartBox from "./smart-box/SmartBox";


const ColorPicker = () => {

  const [color, setColor] = useState('grey');

  const onClick = (val:string) => {
    setColor(val);
  };

  return (
    <div>
      <h2>Color Picker:</h2>
      <div>
        <SmartButton color="red" handler={onClick}/>
        <SmartButton color="green" handler={onClick}/>
        <SmartButton color="blue" handler={onClick}/>
        <SmartButton color="grey" handler={onClick}/>
      </div>
      <SmartBox color={color}/>
    </div>
  );
};

export default ColorPicker;