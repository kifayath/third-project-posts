import React, { Fragment, useRef, useState } from "react";
import Input from "../UI/Input";
import NewPostCss from "../Posts/NewPost.module.css";

const NewPost = (props) => {
  const [titleIsInvalid, setTitleIsInvalid] = useState(false);
  const [descIsInvalid, setDescIsInvalid] = useState(false);

  let disableSubmit = false;

  const title = useRef();
  const desc = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title.current.value);
    console.log(desc.current.value);
    // Title field validation
    if (title.current.value === "") {
      disableSubmit = true;
      setTitleIsInvalid(true);
    } else {
      setTitleIsInvalid(false);
    }

    // Description field validation
    if (desc.current.value === "") {
      disableSubmit = true;
      setDescIsInvalid(true);
    } else {
      setDescIsInvalid(false);
    }
    if (disableSubmit) {
      return;
    }

    hideFormHandler();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        body: desc.current.value,
        userId: Math.ceil(Math.random() * 1000),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  // Close the form
  const hideFormHandler = () => {
    props.onCancelForm(false);
  };
  return (
    <Fragment>
      <form className={NewPostCss.form} onSubmit={submitHandler}>
        <Input type="text" name="title" label="Title" ref={title} />
        {titleIsInvalid && <p>Please enter the Title field</p>}
        <Input type="text" name="desc" label="Description" ref={desc} />
        {descIsInvalid && <p>Please enter the Description field</p>}
        {!disableSubmit && (
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        )}
        &nbsp;&nbsp;
        <button
          type="button"
          onClick={hideFormHandler}
          className="btn btn-default"
        >
          Cancel
        </button>
      </form>
    </Fragment>
  );
};

export default NewPost;
