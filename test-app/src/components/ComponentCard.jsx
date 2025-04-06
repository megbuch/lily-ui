export default function ComponentCard(props) {
  const { component, title, description, readmeURL } = props

  return (
    <div>
      {component}
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={readmeURL}>How to Use</a>
    </div>
  )

}