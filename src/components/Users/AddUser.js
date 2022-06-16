import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
// import userEvent from '@testing-library/user-event';

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

const nameInputRef = useRef()
const ageInputRef = useRef()
const clgInputRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    const enteredClg =  clgInputRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredClg.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge,enteredClg);
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  clgInputRef.current.value =''

  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
    console.log('hi');
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref ={ageInputRef}
          />
           <label htmlFor="clg">Name of your college</label>
          <input
            id="clg"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref ={clgInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
