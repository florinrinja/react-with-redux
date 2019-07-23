import React, { Component } from 'react';
import { connect } from 'react-redux'; // IMPORTANT REDUX

function CounterComponent(props) {
  //actions
  const addAction = {
    type: 'ADD',
  };

  const removeAction = {
    type: 'REMOVE',
  };

  const add_10Action = {
    type: 'ADD_10',
  };

  const remove_10Action = {
    type: 'REMOVE_10',
  }

  const resetAction = {
    type: 'RESET',
  }

  return (
    <div className="blockCounter">
      <p>{props.counter}</p>
      <button onClick={() => props.dispatch(addAction)}>+1</button>
      <button onClick={() => props.dispatch(removeAction)}>-1</button>
      <button onClick={() => props.dispatch(add_10Action)}>+10</button>
      <button onClick={() => props.dispatch(remove_10Action)}>-10</button>
      <button onClick={() => props.dispatch(resetAction)}>RESET</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent)

export default CounterContainer;