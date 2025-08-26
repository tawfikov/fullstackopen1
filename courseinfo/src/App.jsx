const Header = () => {
  const course = 'Half Stack application development'
  return <h1>{course}</h1>
}

const Content = () => {
  return (
    <div>
      <Part name='Fundamentals of React' exercises={10} />
      <Part name='Using props to pass data' exercises={7} />
      <Part name='State of a component' exercises={14} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
      <p>
        {props.name} {props.exercises}
      </p>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App