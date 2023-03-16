import React from 'react';
import ReactDOM from 'react-dom/client';


function AnimalListes(props) {
  const myAnim = props.myAnim;

  return (
    <>
      <h1> My animal lists </h1>
      <ul>
        {myAnim.length > 0 &&
          myAnim.map((myFunc) => <li>{myFunc}</li>)
        }
      </ul>

    </>
  )

}

const animales = ["alligator", "snake", "lizard", "tiger", "lion"];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AnimalListes myAnim={animales} />);
