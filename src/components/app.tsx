import React, {useState} from 'react';

import Nav from "./nav/nav";

import ColorPicker from "./color-pIcker/ColorPicker";
import Instructions from "./instructions/Instructions";
import Mover from "./mover/Mover";
import Table from "./table/Table";

interface AppProps {
  compiler: string;
  framework: string;
}

interface INavObject {
  label: string;
  component: any;
}

const tableData = {
  heads: ['brand', 'product', 'price'],
  rows: [
    ['Apple', 'Laptop', '$4000.00'],
    ['Apple', 'Laptop', '$4000.00'],
    ['Apple', 'Laptop', '$4000.00'],
    ['Apple', 'Laptop', '$4000.00'],
    ['Apple', 'Laptop', '$4000.00'],
  ]
};

const navItems: Array<INavObject> = [
  {label:'ColorPicker', component:<ColorPicker/>},
  {label:'Instructions', component:<Instructions/>},
  {label:'Mover', component:<Mover/>},
  {label:'Table', component:<Table data={tableData}/>}
];

export const App = (props: AppProps) => {
  const [navItem, setNavItem] = useState('Instructions');
  return (
    <div>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <Nav items={navItems} handler={setNavItem}/>
      {navItem}
    </div>
  );
};

