import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}:</label>
        <input
          type={props.type}
          className="form-control"
          id={props.name}
          ref={ref}
        />
      </div>
    </React.Fragment>
  );
});

export default Input;
