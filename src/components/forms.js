import React from 'react';
import TextField from '@mui/material/TextField';

export function FirstNameForm(props) {
  if (props.validated || props.validated === '') {
    return (
      <TextField
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '& .MuiInputBase-root': {
            borderRadius: '0',
          },
        }}
        margin="normal"
        label={'First Name'}
        id={'firstName'}
        key={'firstName'}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    );
  }
  return (
    <TextField
      error
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '0',
        },
      }}
      margin="normal"
      label={'First Name *'}
      id={'firstName'}
      key={'firstName'}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}

export function LastNameForm(props) {
  if (props.validated || props.validated === '') {
    return (
      <TextField
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '& .MuiInputBase-root': {
            borderRadius: '0',
          },
        }}
        margin="normal"
        label={'Last Name'}
        id={'lastName'}
        key={'lastName'}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    );
  }
  return (
    <TextField
      error
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '0',
        },
      }}
      margin="normal"
      label={'Last Name *'}
      id={'lastName'}
      key={'lastName'}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}

export function EmailForm(props) {
  if (props.validated || props.validated === '') {
    return (
      <TextField
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '& .MuiInputBase-root': {
            borderRadius: '0',
          },
        }}
        margin="normal"
        label={'Email'}
        id={'email'}
        key={'email'}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    );
  }
  return (
    <TextField
      error
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '0',
        },
      }}
      margin="normal"
      label={'Email  *'}
      id={'email'}
      key={'email'}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}

export function PasswordForm(props) {
  if (props.validated || props.validated === '') {
    return (
      <TextField
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '& .MuiInputBase-root': {
            borderRadius: '0',
          },
        }}
        margin="normal"
        label={'Password'}
        id={'password'}
        key={'password'}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    );
  }
  return (
    <TextField
      error
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '0',
        },
      }}
      margin="normal"
      label={'Password *'}
      id={'password'}
      key={'password'}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      helperText="8 characters min"
    />
  );
}
