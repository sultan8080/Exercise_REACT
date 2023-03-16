import React from 'react';
import ReactDOM from 'react-dom/client';

function Fruits(props) {
  return <li> Je suis un {props.nom}</li>
}

function FruitsBaskets() {
  let fruits = ["Apple", "Orange", "Plum", "banana", "Pinappel"];

  return (
    <>
      <h1>
        What types of fruits i have in my basket?
      </h1>
      <ul>
        <li>
          {fruits.map((fruit) => <Fruits nom={fruit} />)}
        </li>
      </ul>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FruitsBaskets />);