import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const message = `Hello ${props.name} !`;
  return <h1>{message}</h1>;
};

const root = document.getElementById('root');
ReactDOM.render(<Hello name="Renato" />, root);
