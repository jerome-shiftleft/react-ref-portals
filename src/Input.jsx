import React from 'react';

const Input = React.forwardRef((props, ref) => {
  const { label, ...inputProps } = props;

  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...inputProps} />
    </p>
  );
});

export default Input;
