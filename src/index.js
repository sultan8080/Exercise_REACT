import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


function MyForm() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const formSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={formSubmit}>
      <label>
        Votre nom     <input type="text" name="nomUser" value={inputs.nomUser || ""} onChange={handleChange} />
      </label>

      <label>
        Votre prenom  <input type="text" name="prenomUser" value={inputs.prenomUser || ""} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MyForm />);