import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('World');

  const handleClick = () => {
    setValue('React');
  };

  return (
    <div>
      <h1>Hello {value}!</h1>
      <button onClick={handleClick}>Change Greeting</button>
    </div>
  );
}

export default App;

