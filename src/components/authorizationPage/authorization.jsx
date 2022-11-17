import React, { useState, useEffect } from 'react';
import Main from './components/main';

function Header() {
  return (
    <header>
      <h1>Sign in with your email</h1>
      <p>
        Don't have an account?<a href="/signup">Sign up</a>
      </p>
    </header>
  );
}
export default function Authorization() {
  const [validated, setValidated] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
    if (validated) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  });

  return (
    <div className="registration">
      <div className="container">
        <Header />
        <Main
          onValidation={(state) => setValidated(state)}
          status={buttonStatus}
        />
      </div>
    </div>
  );
}
