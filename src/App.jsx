import { useState, useEffect } from 'react'
import {FileInput} from './components/FileInput/FileInput'

import './App.css'
import { FileContent } from './components/FileContent/FileContent';
import { LineInput } from './components/LineInput/LineInput';

function App() {

  const [filedata, setfiledata] = useState();
  const [startline, setstartline] = useState();
  const [endline, setendline] = useState();
  const [message, setmessage] = useState("File Data will be Shown Below!");
  const [totallines, settotallines] = useState(0);
  const [verified, setverified] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    if (filedata) {
      settotallines(filedata.split(/\r\n|\n/).length);
      setverified(false);
    }
  }, [filedata]);

   useEffect(() => {
    
      setverified(false);
    
  }, [startline,endline]);


    const verifyinput = () => {

        if (!filedata)       
          return fail("Upload File First");

        if (!startline || !endline) 
          return fail("Please Fill All Input Fields");

        if (startline <= 0 || endline <= 0) 
          return fail("Line numbers must be > 0");

        if (isNaN(startline) || isNaN(endline)) 
          return fail("Inputs must be numbers");

        if (startline > endline) 
          return fail("Start line must be smaller than End line");

        if (startline > totallines) 
          return fail("Start line exceeds total file lines");

        if (endline > totallines) 
          return fail("End line exceeds total file lines");

        
        setmessage("File Data will be shown below!");
        seterror(false);
        setverified(true);
  };

  function fail(msg)
  {
    setmessage(msg);
    seterror(true);
    setverified(false);
    return;
  }


  return (
    <>
      <FileInput setFiledata={setfiledata}></FileInput>
      <div>

          <div>
            <LineInput printmsg="Enter Starting Line Number" setdata={setstartline}></LineInput>
            <LineInput printmsg="Enter Ending Line Number" setdata={setendline}></LineInput>
            <button className='input-submit-btn' onClick={verifyinput}>Submit</button>
          </div>

          {filedata?<b>Total Lines Are {totallines}</b>:""}
      </div>

     <b style={{ color: error ? "red" : "white" }}>
      {message}
    </b>
      <FileContent data={ verified?filedata:""} start={startline} end={endline}></FileContent>
      
      
    </>
  )
}

export default App
