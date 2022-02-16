import React from 'react';
console.log('====================================');
console.log(111);
console.log('====================================');
const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
);

export default ErrorMessage;
