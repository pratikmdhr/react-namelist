import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/UI/Modal/ErrorModal';
import './App.css';

function App() {
  const [userArr, setUserArr] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (isInvalid) => setShowModal(isInvalid);

  const addToList = (newItem) => {
    setUserArr((prevUserArr) => [newItem, ...prevUserArr]);
  };

  return (
    <div className='App'>
      {showModal && (
        <ErrorModal
          title='An error Occured!'
          message='Please enter a valid name '
          displayModal={showModalHandler}
        />
      )}
      <AddUser addToList={addToList} displayModal={showModalHandler} />
      <UserList items={userArr} />
    </div>
  );
}

export default App;
