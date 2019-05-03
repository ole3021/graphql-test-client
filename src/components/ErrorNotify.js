import React from 'react';

const ErrorNotify = ({ error }) => (
  <div className="nes-container is-rounded">
    <span className="nes-text is-error">{error.message}</span>
  </div>
);

export default ErrorNotify;
