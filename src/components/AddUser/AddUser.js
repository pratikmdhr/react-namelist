import React, { useRef } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Style from './AddUser.module.css';

const Entry = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  // const nameChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (!name.trim() || !age) {
      props.displayModal(true);
      return;
    }
    const key = Math.random().toString();
    const newItem = { key, name, age };
    props.displayModal(false);
    props.addToList(newItem);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={Style.form}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          // value={enteredName}
          // onChange={nameChangeHandler}
          ref={nameInputRef}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          min='1'
          step='1'
          // value={enteredAge}
          // onChange={ageChangeHandler}
          ref={ageInputRef}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default Entry;
