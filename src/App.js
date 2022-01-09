import React, { useState } from "react";
import Card from "./Components/UI/Card";
import NewPost from "./Components/Posts/NewPost";
import PostList from "./Components/Posts/PostList";

function App() {
  const [showForm, setShowForm] = useState(false);
  // Dispaly the form
  const showFormHandler = () => {
    setShowForm(true);
  };
  // Close the form
  const cancelFormHandler = () => {
    setShowForm(false);
  };
  return (
    <Card>
      <br />
      {!showForm && (
        <button
          onClick={showFormHandler}
          type="button"
          className="btn btn-primary"
        >
          Create new post
        </button>
      )}

      {showForm && <NewPost onCancelForm={cancelFormHandler} />}
      <PostList />
    </Card>
  );
}

export default App;
