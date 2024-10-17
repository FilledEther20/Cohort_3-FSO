const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, id) => (
        <Part key={id} part={part} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const tot = parts
    .map((part) => part.exercises)
    .reduce((acc, val) => acc + val);
  console.log(tot)
  return (
    <>
      <p>
        Total number of exercises is {tot}
      </p>
    </>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
