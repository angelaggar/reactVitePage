export default function Article (props) {
  return (
    <>
      <div className="artBox">
        <div className="artIcon">
          <span>{props.icon}</span>
        </div>
        <h1 className="artTitle">{props.title}</h1>
        <p className="artDetails">{props.details}</p>
      </div>
    </>
  )
}