import React, { useState } from 'react';
import Entry from './components/Entry/Entry';
import NameList from './components/NameList/NameList';
import './App.css';

function App() {
  const [nameArr, setNameArr] = useState([]);

  const addToList = (newItem) => {
    setNameArr((prevNameArr) => [newItem, ...prevNameArr]);
  };

  return (
    <div className='App'>
      <Entry addToList={addToList} />
      <NameList items={nameArr} />
    </div>
  );
}

export default App;
