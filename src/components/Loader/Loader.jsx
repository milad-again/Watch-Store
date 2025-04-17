// SpinnerLoader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const SpinnerLoader = () => {
  return (
    <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader color="#36d7b7" loading={true} size={150} />
    </div>
  );
};

export default SpinnerLoader;
