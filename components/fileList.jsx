import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FileList = () => {
  const [files, setFiles] = useState([]);

  // Fetch the list of files from the API route
  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/getFiles', {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log('data:', data);
      return data.files; // Assuming data is an object with a 'files' property
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedFiles = await fetchFiles();
      setFiles(fetchedFiles);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Files:</h2>
      <ul>
        {files.map((fileName, index) => (
          <li key={index}>
            
             <Link className='flex h-8' href={`/uploads/${fileName}`} target="_blank" rel="noopener noreferrer">{fileName}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <path d="M15.954,16.045c-0.104-0.216-0.25-0.39-0.439-0.52c-0.19-0.13-0.436-0.195-0.735-0.195c-0.106,0-0.215,0.001-0.325,0.005 c-0.109,0.003-0.195,0.012-0.255,0.025v4.82c0.021,0.006,0.055,0.012,0.105,0.015c0.05,0.003,0.103,0.007,0.159,0.01 s0.11,0.007,0.16,0.01s0.085,0.005,0.105,0.005c0.3,0,0.546-0.07,0.74-0.21c0.192-0.14,0.345-0.327,0.454-0.56 c0.11-0.233,0.187-0.502,0.23-0.805s0.065-0.622,0.065-0.955c0-0.307-0.019-0.603-0.056-0.89 C16.128,16.514,16.058,16.262,15.954,16.045z M10.425,15.545c-0.097-0.09-0.209-0.155-0.335-0.195c-0.127-0.04-0.26-0.06-0.4-0.06 c-0.206,0-0.376,0.017-0.51,0.05v2.39c0.04,0.014,0.115,0.025,0.225,0.035c0.11,0.01,0.186,0.015,0.226,0.015 c0.146,0,0.286-0.02,0.42-0.06c0.133-0.04,0.252-0.108,0.354-0.205c0.104-0.097,0.186-0.23,0.245-0.4 c0.061-0.17,0.09-0.385,0.09-0.645c0-0.22-0.028-0.407-0.085-0.56S10.521,15.635,10.425,15.545z" fill="#F8F012" />
  <path d="M24.71,9.79l-6.5-6.5C18.02,3.11,17.76,3,17.5,3H7C5.89,3,5,3.89,5,5v21c0,1.1,0.89,2,2,2h13.78 c-0.5-0.54-0.78-1.26-0.78-2c0-1.65,1.35-3,3-3v-2c0-1.3,0.84-2.41,2-2.82V10.5C25,10.23,24.9,9.98,24.71,9.79z M11.88,17.6 c-0.13,0.31-0.29,0.56-0.5,0.75s-0.44,0.33-0.72,0.42c-0.27,0.09-0.54,0.13-0.83,0.13H9.51c-0.07-0.01-0.13-0.01-0.19-0.02 c-0.07-0.01-0.11-0.01-0.14-0.02v2.41H7.92v-6.93c0.24-0.05,0.5-0.1,0.79-0.12c0.29-0.03,0.57-0.05,0.86-0.05 c0.31,0,0.61,0.03,0.9,0.09c0.3,0.05,0.57,0.16,0.8,0.33c0.23,0.17,0.42,0.4,0.57,0.71c0.14,0.3,0.22,0.69,0.22,1.18 C12.06,16.92,12,17.29,11.88,17.6z M17.4,19.1c-0.09,0.45-0.24,0.84-0.47,1.17c-0.23,0.34-0.54,0.61-0.92,0.81 c-0.39,0.2-0.88,0.3-1.46,0.3c-0.09,0-0.21,0-0.35-0.01c-0.15-0.01-0.3-0.02-0.46-0.03c-0.16-0.01-0.32-0.02-0.46-0.03 c-0.15-0.01-0.26-0.02-0.34-0.03v-7.01c0.12-0.02,0.25-0.04,0.4-0.05c0.15-0.01,0.31-0.02,0.46-0.03c0.16-0.01,0.31-0.01,0.46-0.02 h0.39c0.55,0,1.01,0.08,1.38,0.25c0.37,0.17,0.67,0.41,0.89,0.72c0.23,0.31,0.38,0.69,0.48,1.12c0.09,0.43,0.14,0.92,0.14,1.45 C17.54,18.2,17.49,18.66,17.4,19.1z M22.04,15.43H19.8v1.82h2.06v1.16H19.8v2.86h-1.26v-7h3.5V15.43z M18,11c-0.55,0-1-0.45-1-1 V4.9l6.1,6.1H18z" fill="#F8F012" />
  <path d="M30,26c0-0.552-0.448-1-1-1h-2v-4c0-0.552-0.448-1-1-1s-1,0.448-1,1v4h-2c-0.552,0-1,0.448-1,1 c0,0.287,0.125,0.542,0.319,0.725l2.967,2.972C25.467,29.883,25.719,30,26,30s0.533-0.117,0.714-0.304l2.967-2.972 C29.875,26.542,30,26.287,30,26z" fill="#F8F012" />
</svg>
             </Link>
             </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
