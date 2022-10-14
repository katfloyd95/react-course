import './index.css';
import React from 'react';
import LeftContent from './Components/LeftContent';
import RightImage from './Components/RightImage';

function App() {

  const [stage, setStage] = React.useState(0);

  return (
    <div className='form-container'>
      <LeftContent stage={stage} setStage={setStage} />
      <RightImage stage={stage} setStage={setStage} />
    </div>
  );
}

export default App;
