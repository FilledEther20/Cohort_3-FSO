const Part=({part,exercise})=>{
  return(
    <>
      <p>{part} {exercise}</p>
    </>
  )
}
const Header=({course})=>{
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}
const Content=({parts,exercise})=>{
  return(
    <>
      {parts.map((val,id)=>(
        <Part key={id} part={val} exercise={exercise[id]}/>
      ))}
    </>
  )
}

const Total=({exercise})=>{
  return(
    <>
      <p>The total number of exercises is {exercise.reduce((acc,val)=>acc+val)}</p>
    </>
  )
}
const App=()=> {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts=[part1,part2,part3]
  const exercise=[exercises1,exercises2,exercises3]
  return (
    <>
      <Header course={course}/>
      <Content parts={parts} exercise={exercise}/>
      <Total exercise={exercise}/>
    </>
  )
}

export default App
