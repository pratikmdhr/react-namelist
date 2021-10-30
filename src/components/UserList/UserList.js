import React from 'react';
import Card from '../UI/Card/Card';
import ListItem from './ListItem';

const UserList = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <Card>
      <ul>
        {items.map((item) => (
          <ListItem name={item.name} age={item.age} key={item.key} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
