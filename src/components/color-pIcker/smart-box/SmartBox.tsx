import React from 'react';


interface Props {
  color?: string;
}

const SmartBox = (props: Props) => {
  return (
    <div>
      <p>My color is {props.color}</p>
      <div>{props.color && (`${props.color} color applied.`)}</div>
    </div>
  );
};

export default SmartBox;