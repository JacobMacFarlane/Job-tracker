import './styles.css';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import ApplicationCard from '../ApplicationCard/ApplicationCard';
import ApplicationForm from '../ApplicationForm/ApplicationForm';

const App = () => {
  const [applications, setApplications] = useState([])
  const [progress, setProgress] = useState(0)

  const handleSubmit = (applicationData) => {
    setApplications([...applications, applicationData])
    setProgress((prevProgress) => Math.min(prevProgress + 1, 6))
  }

  return (
    <div className='container mx-auto p-4'>
      <ProgressBar progress={progress} />
      <h1 className='text-3x1 font-bold mt-4'>Job Application Tracker</h1>
      <ApplicationForm onSubmit={handleSubmit} />
      <div className='grid gap-4 mt-4'>
        {applications.map((application, index) => (
          <ApplicationCard key={index} application={application} />
        ))}
      </div>
    </div>
  )
}

export default App;
