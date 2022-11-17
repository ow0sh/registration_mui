import React, { useState, useEffect } from 'react';

import Main from './components/main';
import Footer from './components/footer';

function Header() {
  return (
    <header>
      <h1>Sign up with your email</h1>
      <p>
        Already have an account? <a href="/">Sign in</a>
      </p>
    </header>
  );
}

export default function Registration() {
  const [checked, setChecked] = useState(false);
  const [validated, setValidated] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
    if (checked && validated) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  });

  return (
    <div className="registration">
      <div className="container">
        <Header />
        <Main onValidation={(state) => setValidated(state)} />
        <Footer
          onChecked={(state) => setChecked(state)}
          status={buttonStatus}
        />
      </div>
    </div>
  );
}
