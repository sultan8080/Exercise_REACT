import React from 'react';
import ReactDOM from 'react-dom/client';

function Fruits(props) {
  return <li> {props.nom}</li>
}

function FruitsBaskets() {
  let fruits = ["ID: 1,Apple", "ID: 2, Orange", "ID: 3, Plum", "ID: 4, banana", "ID: 4, Pinappel"];

  return (
    <>
      <h1>
        What types of fruits i have in my basket?
      </h1>
      <ul class="text-start">

        {fruits.map((fruit) => <Fruits key={fruit.id} nom={fruit} />)}

      </ul>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FruitsBaskets />);