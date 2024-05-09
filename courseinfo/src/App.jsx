
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}



const Content = ({parts}) => {
  return parts.map((obj, index) => {
    return <Part key={index} name={obj.name} exercises={obj.exercises} />
  })
}


const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
);


const Total = ({parts}) => {
  const totalCalculated = parts.reduce((acc, num) => acc += num.exercises, 0)
  return <p>total of exercises {totalCalculated}</p>
  
}

const Course = ({course}) => {

  return (
    <div>
     <Header course={course.name} />
     <Content parts={course.parts}  />
     <Total   parts={course.parts}/>
     
    </div>
  )
}


//coment
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
