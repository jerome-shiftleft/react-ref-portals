import React from 'react';
import Form from './Form';

function App() {
  const formRef = React.useRef();

  function handleRestart() {
    // Call the clear() method from the Form component
    formRef.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      {/* Pass the ref to the Form component */}
      <Form ref={formRef} />
    </div>
  );
}

export default App;