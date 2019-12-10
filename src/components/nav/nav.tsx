import React from 'react';

interface INavObject {
  label: string;
  component: string;
}

interface Props {
  items: Array<INavObject>;
  handler: Function;
}

const Nav = (props: Props) => {

  const onClick = (val:string) => {
    console.log(val);
    props.handler(val);
  };

  return (
    <nav>
      <ul>
        {props.items.map((item, idx) => {
          return (
            <li key={idx}>
              <a onClick={() => {onClick(item.component)}}>{item.label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;