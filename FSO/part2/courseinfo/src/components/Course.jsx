const Part = ({ part }) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    );
  };
  const Header = ({ header }) => {
    return (
      <>
        <h1>{header}</h1>
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
    // console.log(tot)
    return (
      <>
        <b><p>
          Total number of exercises is {tot}
        </p>
        </b>
      </>
    );
  };

  const Course=({course})=>{
    return(
        <>
          <Header header={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>  
        </>
    )
  }

  export default Course