//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { Connect } from 'vite'


function App() {
  const course_name="Half Stack application development";
  const content_data=[
    {
      course_name:'Fundamentals of React',
      exercises:10,
      demofunction: function() {
                    console.log("this is demo funciton inside object");
                  }
    },
    {
      course_name:'Using props to pass data',
      exercises:7,
      demofunction: function() {
                      console.log("this is demo funciton inside object");
                    }
    },
    {
      course_name:'State of a component',
      exercises:14
    }
  ];
  return (
    <>
    <Header course_name={course_name} />
    <Content content_data={content_data} />
    <Total total_exercises={content_data}/>
    </>
  );
}

function Header( props) {
  return (
    <>
     <h1>{props.course_name}</h1>
    </>
  );

}

function Content(props) {
  return (
    <>
      <Part p1={props.content_data[0]} />
      <Part p1={props.content_data[1]} />
      <Part p1={props.content_data[2]} />
    </>
  );

}

function Part(props) {
  return (
    <>
     <p>
        {props.p1.course_name} {props.p1.exercises}
      </p>
    </>
  );
}

function Total(props) {
  return (
    <>
    <p>Total Exercies: {props.total_exercises[0].exercises+
                        props.total_exercises[1].exercises+
                        props.total_exercises[2].exercises}</p>
    </>
  );

}

export default App