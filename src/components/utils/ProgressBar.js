import React, { useState } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // State to track progress level

  // Function to increment progress
  const incrementProgress = () => {
    setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
  };

  return (
    <div className="progress-bar-container">
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Progress text */}
      <div className="progress-text">{`${progress}%`}</div>

      {/* Button to increment progress */}
      <button onClick={incrementProgress}>Increment Progress</button>
    </div>
  );
};

export default ProgressBar;

