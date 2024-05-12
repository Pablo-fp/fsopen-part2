import React from "react";
import Header from "./Header";

const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} part={part} />);
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const totalCalculated = parts.reduce((acc, num) => (acc += num.exercises), 0);
  return <h3>Total of exercises {totalCalculated}</h3>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} el="h2" />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
