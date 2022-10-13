export default function InputContent({stage}) {
  
  let inputContent;
  if (stage === 0) {
    inputContent = (
      <>
        <input type='text' placeholder="What's your email?" />
      </>
    )
  }
  if (stage === 1) {
    inputContent =(
      <>
        <select name="budget" id='budget' multiple>
          <option value='2k'>$2K</option>
          <option value='5k'>$5K</option>
          <option value='no limit'>No Limit</option>
        </select>
      </>
    )
  }
  
  return (
    <div className='input-content'>
      {inputContent}
    </div>
  )
}