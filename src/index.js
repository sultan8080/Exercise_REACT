import React from 'react';
import ReactDOM from 'react-dom/client';

function Person(props) {
  return <h2>I'm {props.nom}, I am a {props.developer} by profession!</h2>;
}

function Intro() {
  const nom = "Sultan";
  const profession = "Web Developer Full stack";
  return (
    <>
      <Person nom={nom} developer={profession} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Intro />);


