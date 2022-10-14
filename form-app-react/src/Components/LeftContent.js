import SlideText from "./SlideText";
import InputContent from "./InputContent";

export default function LeftContent({stage, setStage}) {

  return (
    <div className='left-text-container'>
      <div className='content-container'>
        <SlideText stage={stage}/>
        <InputContent stage={stage} />
        {stage !== 3 &&
          <button 
          className='next-btn'
          onClick={() => {
            setStage(stage + 1);
          }}  
          >Next</button>
        }
      </div>
    </div>
  )
}