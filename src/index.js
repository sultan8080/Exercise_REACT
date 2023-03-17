import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


function MyForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    alert(`le nom et prenom est: ${nom} et ${prenom}`);
  }

  return (
    <form onSubmit={formSubmit}>
      <label>
        Votre nom
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </label>

      <label>
        Votre prenom  <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MyForm />);