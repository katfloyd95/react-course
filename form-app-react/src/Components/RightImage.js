
export default function RightImage({stage}) {

  const rightImages = [
    'https://assets.codepen.io/6060109/form-stage-1.png',
    'https://assets.codepen.io/6060109/form-stage-2.png',
    'https://assets.codepen.io/6060109/form-stage-3.png',
    'https://assets.codepen.io/6060109/form-stage-4.png'
  ]
  
  let rightImageSrc
  rightImageSrc = rightImages[stage]

  return (
    <div className="right-image-container">
      <img src={rightImageSrc} alt={`Form Page ${stage + 1}`} />
    </div>
  )
}