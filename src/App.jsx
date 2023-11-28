import React from 'react';
import Input from './Input';

export const userData = {
  name: '',
  email: '',
};

export default function App() {
  const nameRef = React.useRef();
  const emailRef = React.useRef();

  function handleSaveData() {
    userData.name = nameRef.current.value;
    userData.email = emailRef.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={nameRef} />
      <Input type="email" label="Your E-Mail" ref={emailRef} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

