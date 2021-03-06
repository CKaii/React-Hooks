import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

    return (
      <div>
        <div>
        <button className='ui primary button' onClick={() => setResource('posts')}>Posts</button>
        <button className='ui button' onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );
  }

export default App;
