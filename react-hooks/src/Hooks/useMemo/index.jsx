import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ id, title, body, handleClick }) => {
  return (
    <div key={id} className='post'>
      <h1 onClick={() => handleClick(title)}>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

Post.propTypes = {
  title: P.string,
  body: P.string,
  id: P.number,
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className='App'>
      <p>
        <input
          ref={input}
          type='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              handleClick={handleClick}
            />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && <p>No posts yet.</p>}
    </div>
  );
}

export default App;
