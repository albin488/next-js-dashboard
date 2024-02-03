'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileList from '@/components/fileList';
import dynamic from 'next/dynamic';

const Upload = () => {
  const router=useRouter();
    const [file, setFile] = useState();
    const [title, setTitle]=useState();
    const [message, setMessage] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);

    const onFileChange = (event) => {
      const files = event.target.files;

       // Filter out non-PDF files
    const pdfFiles = Array.from(files).filter((file) => file.type === 'application/pdf');

      setSelectedFiles([...selectedFiles, ...pdfFiles]);
    };

    const onFileChanges = (e) => {
        setFile(e.target.files[0]);
        setTitle(e.target.value)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!file) return;
        const data = new FormData();
        data.set('file', file);
        fetch('/api/upload', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            router.refresh();
            setSelectedFiles("");
            setMessage("files uploaded");
           
            return response.text();
            
        })
        .then((text) => {
            setMessage(text);
        })
        .catch((error) => {
            setMessage(error.message);
        });
    };
    const onUpload = async () => {
        // Assuming you are using fetch to send files to the server
        const formData = new FormData();
    
        // Append each file to the formData
        selectedFiles.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });
    
        // Now you can send formData to your server using fetch or any other method
    
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
    
          // Handle the response as needed
          console.log(response);
          router.refresh();
          setMessage("files uploaded");
        } catch (error) {
          console.error('Error uploading files:', error);
          setMessage(error.message);
        }
      };

    return (
      <div className='flex w-full'>
        <div className=" w-2/4 p-2 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
           
            <form className='flex flex-col p-4 border border-gray-300  gap-4 mt-12"' action="/api/upload" encType="multipart/form-data" method="post" onSubmit={onFormSubmit}>
            <h1>Upload a file</h1>
              
                <br />
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="upload" type="file" name="upload" onChange={onFileChange} multiple />
      <br />
      
      {/* Display selected file names if needed */}
      {selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={onUpload}>Upload</button>
               {/* <input type="submit" value="Upload" />*/}
            </form>
            <p>{message}</p>
        </div>
        <div className=" w-2/4 p-2 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max">
<FileList/>
        </div>
        </div>
    );
};

export default Upload;
