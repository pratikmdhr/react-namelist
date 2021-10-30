import React from 'react';
import Style from './ListItem.module.css';

const ListItem = ({ name, age }) => {
  return (
    <li className={Style.list_item}>
      {name} ({age} years)
    </li>
  );
};

export default ListItem;
