import React from 'react';
import Card from '../UI/Card/Card';
import ListItem from './ListItem';
import './NameList.css';

const NameList = (props) => {
  console.log(props);
  if (props.items.length === 0) return null;
  return (
    <Card>
      <ul>
        {props.items.map((item) => (
          <ListItem name={item.name} age={item.age} key={item.key} />
        ))}
      </ul>
    </Card>
  );
};

export default NameList;
