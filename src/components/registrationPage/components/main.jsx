import React, { useState, useEffect } from 'react';
import {
  FirstNameForm,
  LastNameForm,
  EmailForm,
  PasswordForm,
} from '../../forms.js';

export default function Main(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validatedFirstName, setValidatedFirstName] = useState('');
  const [validatedLastName, setValidatedLastName] = useState('');
  const [validatedPass, setValidatedPass] = useState('');
  const [validatedMail, setValidatedMail] = useState('');

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  function handlerChange(e) {
    const elem = e.target;

    switch (elem.id) {
      case 'firstName':
        setFirstName(elem.value);
        elem.value !== ''
          ? setValidatedFirstName(true)
          : setValidatedFirstName(false);

        break;
      case 'lastName':
        setLastName(elem.value);
        elem.value !== ''
          ? setValidatedLastName(true)
          : setValidatedLastName(false);

        break;
      case 'email':
        setEmail(elem.value);
        setValidatedMail(re.test(elem.value));

        break;
      case 'password':
        setPassword(elem.value);
        elem.value.length >= 8
          ? setValidatedPass(true)
          : setValidatedPass(false);

        break;
    }
  }

  useEffect(() => {
    if (
      validatedFirstName &&
      validatedLastName &&
      validatedMail &&
      validatedPass
    ) {
      props.onValidation(true);
    } else {
      props.onValidation(false);
    }
  });

  return (
    <main>
      <FirstNameForm
        value={firstName}
        onChange={handlerChange}
        validated={validatedFirstName}
      />
      <LastNameForm
        value={lastName}
        onChange={handlerChange}
        validated={validatedLastName}
      />
      <EmailForm
        value={email}
        onChange={handlerChange}
        validated={validatedMail}
      />
      <PasswordForm
        value={password}
        onChange={handlerChange}
        validated={validatedPass}
      />
    </main>
  );
}
