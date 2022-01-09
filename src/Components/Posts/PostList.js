import React, { useEffect, useState } from "react";

const PostList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setLists(json));
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <h2>Posts</h2>
        <ul className="list-group">
          {lists.map((list) => (
            <li className="list-group-item" key={list.id}>
              <a href="">
                <span className="label label-default">{list.title}</span>
              </a>
              <br />
              {list.body}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PostList;
