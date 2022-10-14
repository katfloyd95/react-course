import SlideText from "./SlideText";
import InputContent from "./InputContent";
import React from 'react';

export default function LeftContent({stage, setStage}) {

  const [email, setEmail] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [details, setDetails] = React.useState('');

  return (
    <div className='left-text-container'>
      <div className='content-container'>
        <SlideText stage={stage}/>
        <InputContent 
          email={email}
          updateValueEmail={setEmail} 
          details={details}
          updateValueDetails={setDetails}
          budget={budget}
          updateBudget={setBudget}
          stage={stage} 
        />
        {stage !== 3 &&
          <button 
          className='next-btn'
          onClick={() => {
            setStage(stage + 1);
          }}  
          >Next</button>
        }
        {stage === 3 && 
          <div className="details-overview">
            <ul>
              <li>Email: {email}</li>
              <li>Budget: {budget}</li>
              <li>Extra Details: {details}</li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}