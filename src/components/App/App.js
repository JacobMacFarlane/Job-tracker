// import './styles.css';
import '/Users/thamoops/hackathon/job-search/src/styles.css'
import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import ApplicationCard from '../ApplicationCard/ApplicationCard';
import ApplicationForm from '../ApplicationForm/ApplicationForm';


const App = () => {
  const endOfDayTime = new Date();
  endOfDayTime.setHours(23, 0, 0, 0);
  const endOfDayTimestamp = Math.floor(endOfDayTime.getTime() / 1000);

  const [applications, setApplications] = useState([]);
  const [progress, setProgress] = useState(0);
  const [disableSubmit, setDisableSubmit] = useState(false);

  useEffect(() => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    console.log(currentTimestamp)
    console.log(endOfDayTimestamp)
    if (currentTimestamp >= endOfDayTimestamp) {
      // Reset progress bar at the end of the day
      setProgress(0);
      setDisableSubmit(false);
      localStorage.setItem('lastSubmissionTimestamp', currentTimestamp);
    } else {
      // Check if the progress bar is already full for the day
      const lastSubmissionTimestamp = parseInt(localStorage.getItem('lastSubmissionTimestamp'));
      if (lastSubmissionTimestamp >= endOfDayTimestamp) {
        alert('Great work applying today! Take a break and come back tomorrow!');
        setProgress(6);
        setDisableSubmit(true);
      } else {
        setProgress(calculateProgress(lastSubmissionTimestamp, currentTimestamp));
        setDisableSubmit(false);
      }
    }
  }, [endOfDayTimestamp]);

  const calculateProgress = (lastTimestamp, currentTimestamp) => {
    const timeDifference = currentTimestamp - lastTimestamp;
    const applicationsPerDay = 6; // Maximum 6 applications per day
    const progress = Math.min(6, Math.floor(timeDifference / (60 * 60 * 24) * applicationsPerDay));
    return progress;
  };

  const handleSubmit = (applicationData) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const lastSubmissionTimestamp = parseInt(localStorage.getItem('lastSubmissionTimestamp'));

    if (progress >= 6) {
      alert('Great work applying today! Take a break and come back tomorrow!');
      return;
    }

    setApplications([...applications, applicationData]);

    // Calculate and set the updated progress
    const updatedProgress = calculateProgress(lastSubmissionTimestamp, currentTimestamp);
    setProgress((prevProgress) => Math.min(prevProgress + 1, 6))

    // Disable submit button if the progress is already at 6
    if (updatedProgress >= 6) {
      setDisableSubmit(true);
    }

    // Update the last submission timestamp in localStorage
    localStorage.setItem('lastSubmissionTimestamp', currentTimestamp);
  };

  return (
    <div className="container mx-auto p-4">
      <ProgressBar progress={progress} />
      <h1 className="text-3xl font-bold mt-4">Job Application Tracker</h1>
      <ApplicationForm onSubmit={handleSubmit} disableSubmit={disableSubmit} />
      <div className="grid gap-4 mt-4">
        {applications.map((application, index) => (
          <ApplicationCard key={index} application={application} />
        ))}
      </div>
    </div>
  );
};


export default App;
