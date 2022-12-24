import P from "prop-types";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const Post = ({ id, title, body }) => {
  console.log("Filho renderizou");
  return (
    <div key={id} className='post'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

Post.propTypes = {
  title: P.string,
  body: P.string,
  id: P.number,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  console.log("pai renderizou");

  useEffect(() => {
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 2000);
  }, []);

  return (
    <div className='App'>
      <p>
        <input
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
            />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && <p>No posts yet.</p>}
    </div>
  );
}

export default App;
