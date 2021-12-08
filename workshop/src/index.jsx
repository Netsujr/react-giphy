// rsc + tab >>> creates function Component
// rcc + tab >>> creates class Component
import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// const Hello = (props) => {
//   const { name, age } = props;
//   const message = `Hello, I'm ${name} and I am ${age} years old!`;
//   return <h1>{message}</h1>;
// };

// class Hello extends React.Component {
//   render () {
//     const { name, age } = this.props;
//       const message = `Hello, I'm ${name} and I am ${age} years old!`;
//       return <h1>{message}</h1>;
//   }
// }

// const root = document.getElementById('root');
// ReactDOM.render(<Hello name="Renato" age="28" />, root);
