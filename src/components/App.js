import React from 'react';

import Post from './Post';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <Post title="Dojo React"/>
        <Post title="Estou gostando de estudar"/>
        <Post title="Muito feliz com as minhas conquistas, virão mais"/>
      </div>
    );
  }
}