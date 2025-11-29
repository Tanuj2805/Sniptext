import "./FileContent.css";

function FileContent({ data, start, end }) {

   
    const lines = data.split(/\n/);

    // Slice lines based on start & end
    const output = lines.slice(start - 1, end).join("\n"); 
    // (start - 1 because array is 0-indexed)

    return (
        <div className="file-content-container">
            <pre>{output}</pre>
        </div>
    );
}

export { FileContent };
