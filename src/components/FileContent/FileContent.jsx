import "./FileContent.css";

function FileContent({ data, start, end }) {

   
    const lines = data.split(/\n/);    
    const output = lines.slice(start - 1, end).join("\n"); 
    
    return (
        <div className="file-content-container">
            <pre>{output}</pre>
        </div>
    );
}

export { FileContent };
