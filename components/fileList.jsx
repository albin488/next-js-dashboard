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
            
             <Link href={`/uploads/${fileName}`} target="_blank" rel="noopener noreferrer">{fileName}</Link>
             </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
