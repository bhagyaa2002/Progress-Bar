import React from 'react'

const ProgressBar = ({value})=>{
  return (
    <div className='progress'>
        <span>{value.toFixed()}</span>
    </div>
  );
};

export default ProgressBar;