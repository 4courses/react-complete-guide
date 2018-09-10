import React from 'react'

const person = (props) => {
  const switchNameHandler = (event) => props.switchNameHandler(props.id);
  return (
    <div>
      Hi, my name is {props.name} and I'm {props.age} years old!
      <p>{props.children}</p>
      <button onClick={switchNameHandler}>Change my name!</button>
    </div>
  );
};

export default person;