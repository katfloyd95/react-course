
export default function SlideText({stage}) {

  const SlideTexts = [
    "Apply to work with our agency",
    "What's your budget?",
    "Anything else we should know?",
    "Thank You!"
  ]

  let textContent;
  textContent = SlideTexts[stage];

  console.log(textContent, stage);

  return (
    <div className='title'>
      <h1>{textContent}</h1>
    </div>
  )
}