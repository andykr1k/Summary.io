import * as React from 'react'
import { FileUploader } from "react-drag-drop-files";

export default function FileUpload() {
    const fileTypes = ["PDF"];
    const [file, setFile] = React.useState(null);
    const handleChange = (file) => {
        setFile(file);
    }; 
 
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  )
}