import { useState, useRef } from "react";
import mammoth from "mammoth";
import "./FileInput.css";

function FileInput({ setFiledata }) {

    const [file, setfile] = useState(null);
    const [filename, setfilename] = useState("No File is Selected Till Yet");
    const filepickerref = useRef();

    const handlefileinput = async (e) => {
        const tempfile = e.target.files[0];
        if (!tempfile) return;

          if(tempfile.size > 20*1024*1024)
        {
            alert("file size should be less than 20 Mb");
            return;
        }

        setfile(tempfile);
        setfilename(`Uploaded File : ${tempfile.name}`);
      

        let text = "";

    
        if (tempfile.name.endsWith(".txt")) {
            text = await tempfile.text();
        }
        else if (tempfile.name.endsWith(".docx")) {
            const buffer = await tempfile.arrayBuffer();
            const result = await mammoth.extractRawText({ arrayBuffer: buffer });
            text = result.value;
            text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            text = text.replace(/\n{2}/g, "\n");
        }
        else {
            alert(" Only .txt and .docx supported.\nConvert .doc to .docx first.");
            return;
        }

        setFiledata(text);   
    };

    return (
        <div className="file-input-container">
            <input
                type="file"
                accept=".txt,.docx"
                ref={filepickerref}
                style={{ display: "none" }}
                onChange={handlefileinput}
            />

            <button
                className="file-input-upload-btn"
                onClick={() => filepickerref.current.click()}
            >
                Upload File
            </button>

            <p> {filename}</p>
        </div>
    );
}

export { FileInput };
