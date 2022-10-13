import './index.css';
import React from 'react';

function App() {

  const [stage, setStage] = React.useState(0);

  console.log(stage);

  let content;

  if (stage === 0) {
    content = (
      <>
        <div className='left-text-container'>
          <div className='content-container'>
            <div className='title'>
              <h1>Example Title</h1>
            </div>
            <div className='input-content'>
                <input type='text' placeholder="What's your email?" />
            </div>
            <button 
              className='next-btn'
              onClick={() => {
                setStage(stage + 1);
              }}  
            >Next</button>
          </div>
        </div>
        <div className="right-image-container">
        <img src='https://assets.codepen.io/6060109/form-stage-1.png' alt='Office Img' />
      </div>
      </>
    )
  }

  return (
    <div className='form-container'>
      {content}
    </div>
  );
}

export default App;
