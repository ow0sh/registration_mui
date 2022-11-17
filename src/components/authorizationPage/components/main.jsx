import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { EmailForm, PasswordForm } from '../../forms.js';

function SubmitButton(props) {
  if (props.disabled) {
    return (
      <Button
        sx={{ width: '100%', height: '70px', marginTop: '20px' }}
        variant="contained"
        disabled
      >
        Continue
      </Button>
    );
  }
  return (
    <Button
      sx={{ width: '100%', height: '70px', marginTop: '20px' }}
      variant="contained"
    >
      Continue
    </Button>
  );
}

export default function Main(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validatedPass, setValidatedPass] = useState('');
  const [validatedMail, setValidatedMail] = useState('');

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  function handlerChange(e) {
    const elem = e.target;

    switch (elem.id) {
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
    if (validatedPass && validatedMail) {
      console.log('validated');
      props.onValidation(true);
    } else {
      props.onValidation(false);
    }
  });

  return (
    <main>
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
      <SubmitButton disabled={!props.status} />
    </main>
  );
}
