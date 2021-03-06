import React, {useState} from 'react';

import Nav from "./nav/nav";

import ColorPicker from "./color-pIcker/ColorPicker";
import Instructions from "./instructions/Instructions";
import List from "./list/list";
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

const cars = ['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Fiat', 'Ford', 'Jeep', 'Kia', 'Honda', 'Hundai', 'Mercedes', 'Porsche', 'Subaru', 'Tesla', 'Toyota'];


const tableData = {
  heads: ['brand', 'product', 'price'],
  rows: [
    ['Apple', 'Laptop', '$4000.00'],
    ['Dell', 'Tower', '$2000.00'],
    ['Acer', 'Tower', '$1000.00'],
    ['Lenovo', 'Laptop', '$3400.00'],
    ['Microsoft', 'Tablet', '$1500.00']
  ]
};

const navItems: Array<INavObject> = [
  {label:'Instructions', component:<Instructions/>},
  {label:'ColorPicker', component:<ColorPicker/>},
  {label:'List', component:<List items={cars}/>},
  {label:'Mover', component:<Mover/>},
  {label:'Table', component:<Table data={tableData}/>}
];

export const App = (props: AppProps) => {
  const [navItem, setNavItem] = useState(<Instructions/>);
  return (
    <div>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <Nav items={navItems} handler={setNavItem}/>
      {navItem}
    </div>
  );
};

