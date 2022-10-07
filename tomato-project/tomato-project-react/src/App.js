import React from 'react';
import TomatoContainer from './components/TomatoContainer';
import BtnContainer from './components/BtnContainer';

function App() {

  const [number, setNumber] = React.useState(0);

  return (
    <div className="App">
      <div className="container">
        <h1>Tomato Counter</h1>
        <TomatoContainer number={number} />
        <BtnContainer number={number} setNumber={setNumber} />
      </div>
    </div>
  );
}

export default App;
