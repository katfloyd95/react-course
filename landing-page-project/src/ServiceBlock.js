export default function ServiceBlock(props) {

  return (
    <div className="service-box">
      <img src={props.box.imgURL} />
      <p>{props.box.text}</p>
    </div>
  )
}