import React, { useState } from 'react';
import CheckBox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function SubmitButton(props) {
  if (props.disabled) {
    return (
      <Button
        sx={{ width: '100%', height: '70px', marginTop: '20px' }}
        variant="contained"
        disabled
      >
        Create Account
      </Button>
    );
  }
  return (
    <Button
      sx={{ width: '100%', height: '70px', marginTop: '20px' }}
      variant="contained"
    >
      Create Account
    </Button>
  );
}

export default function Footer(props) {
  const [checked, setChecked] = useState(false);

  function handlerChange() {
    setChecked(!checked);
    props.onChecked(!checked);
  }

  return (
    <footer>
      <p>
        <CheckBox checked={checked} onChange={() => handlerChange()} />I agree
        to the <a href="#">Terms of Service</a> and{' '}
        <a href="#">Privacy Policy</a>
      </p>
      <SubmitButton disabled={!props.status} />
    </footer>
  );
}
