import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
function User() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="column">
          <div className="card">
            <h3>{post.username}</h3>
            <p>{post.email}</p>
            <p>{post.phone}</p>
            <p>{post.website}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;
