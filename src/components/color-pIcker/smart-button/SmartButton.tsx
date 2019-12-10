import React from 'react';


interface Props {
  color: string;
  handler: Function;
}

const SmartButton = (props: Props) => {
  return (
    <button onClick={() => {props.handler(props.color)}}>Make the box {props.color}</button>
  );
};

export default SmartButton;