import React from 'react';
import ReactDOM from 'react-dom/client';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <h2>I am a {this.props.model}!</h2>;
    return <h2> Hi name is {this.props.nom}, I live in {this.props.ville} </h2>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Intro nom="Sultan2" ville="Château ThierrY" />);


