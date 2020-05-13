import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'thiago'}
          fotoUsuario={'https://picsum.photos/id/1025/50/50'}
          fotoPost={'https://picsum.photos/id/1/200/150'}
        />
        <Post
          nomeUsuario={'tayná'}
          fotoUsuario={'https://picsum.photos/id/1027/50/50'}
          fotoPost={'https://picsum.photos/id/1024/200/150'}
        />
      </div>
      
    );
  }
}

export default App;
