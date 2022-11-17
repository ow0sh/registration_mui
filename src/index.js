import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.css';

import Registration from './components/registrationPage/registration';
import Authorization from './components/authorizationPage/authorization';

class App extends React.Component {
  render() {
    if (document.location.pathname === '/signup') {
      return <Registration></Registration>;
    }
    return <Authorization></Authorization>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
