import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Intro() {
  return <h1>Je suis sultan</h1>;
}

function Garage() {
  return (
    <>
      <Intro />
      <h3>Who lives in 02400 Château THierry</h3>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

