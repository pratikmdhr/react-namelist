import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './Entry.css';

const Entry = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const name = enteredName;
    const age = enteredAge;
    if (!name || !age) {
      return;
      <Card>test</Card>;
    }
    const key = Math.random().toString();
    const newItem = { key, name, age };
    // console.log(newItem);
    props.addToList(newItem);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          className='form-control'
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlFor='age' className='form-label'>
          Age (Years)
        </label>
        <input
          type='number'
          className='form-control'
          min='1'
          step='1'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default Entry;
