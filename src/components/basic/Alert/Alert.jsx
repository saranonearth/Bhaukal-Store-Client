import React from 'react';

const Alert = ({ alerts }) => {
  const Alert = !alerts.alertMsg.length
    ? null
    : alerts.alertMsg.map(alert => {
        return (
          <div key={alert.id} className='alert'>
            <div className='alert-content'>
              <div className='title'>
                <h3>{alert.msg}</h3>
              </div>
            </div>
          </div>
        );
      });
  return (
    <>
      <div className='alerts-container'>{Alert}</div>
    </>
  );
};

export default Alert;
