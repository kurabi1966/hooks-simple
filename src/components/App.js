import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div>
        <button
          onClick={() => setResource('posts')}
          className="ui button primary"
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResource('todos');
          }}
          className="ui button primary"
        >
          Todos
        </button>

        <UserList />
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;
