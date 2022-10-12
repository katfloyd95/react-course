import React from 'react';
import TomatoContainer from './components/TomatoContainer';
import BtnContainer from './components/BtnContainer';

function App() {

  const [number, setNumber] = React.useState(0);

  const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su' ]

  return (
    <div className="App">
      <div className="container">
        <h1>Tomato Counter</h1>
        {days.map(dayNum => (
            <div key={dayNum} className='tomato-box'>
              <h3>{dayNum}</h3>
              <div className='tomato-day-box'>
              <TomatoContainer number={number} />
              </div>
            </div>
        ))}
        <BtnContainer number={number} setNumber={setNumber} />
      </div>
    </div>
  );
}

export default App;
