/* eslint-disable */
import React from 'react';

export default ({ label, input, type, required, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        type={type}
        className="form-control"
        required={required}
      />

      {error && touched && <div className="mt-2 text-danger">{error}</div>}
    </div>
  );
};
