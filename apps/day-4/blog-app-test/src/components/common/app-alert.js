import React from 'react';

// ----------------------------------------------------
// AppAlert component is used to display informational
// or warning messages in the application.
// ----------------------------------------------------
const AppAlert = props => {
  const { type, message } = props;

  const alertType = type === 'info' ? 'alert-info' : 'alert-danger';
  const iconType =
    type === 'info' ? 'glyphicon-info-sign' : 'glyphicon-warning-sign';

  return (
    <div className={`alert ${alertType}`}>
      <h5>
        <span className={`glyphicon ${iconType}`} /> {message}
      </h5>
    </div>
  );
};

export default AppAlert;
