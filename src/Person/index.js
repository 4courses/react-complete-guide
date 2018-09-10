import React from 'react'

const person = (props) => {
  const changeNameHandler = (event) => props.changeNameHandler(props.id, event.target.value);
  return (
    <div>
      Hi, my name is {props.name} and I'm {props.age} years old!
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={changeNameHandler} />
    </div>
  );
};

export default person;