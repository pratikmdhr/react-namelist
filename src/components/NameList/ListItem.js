import React from 'react';
import './NameList.css';

const ListItem = ({ name, age }) => {
  return (
    <li>
      {name} ({age} years)
    </li>
  );
};

export default ListItem;
