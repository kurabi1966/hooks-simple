import React from 'react';
import useResources from '../hooks/useResources';

const UserList = () => {
  const users = useResources('users');
  return (
    <div className="ui segment">
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
