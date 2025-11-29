**Sniptexts – Read & Extract Text from Files**

This project allows users to upload a .txt or .docx file and extract only selected lines based on input range. The file is processed completely on the client side inside the browser, which means no file is uploaded or stored on any server. The tool displays the file content as plain text, keeps line breaks intact, and helps users quickly view or isolate required lines without external software. It is simple, secure, fast, and suitable for text-based documents.

**What the Project Does**
- Allows user to upload a text or Word file.
- Reads the content and shows it on the screen.
- Preserves line breaks and text formatting.
- Lets the user enter a start line number and end line number.
- Extracts and displays only the lines between the given range.
- Shows total number of available lines in the file.

**Allowed File Types**
- Supports .txt files.
- Supports .docx files (converted using mammoth.browser).


**Input Rules & Validations**
- File must be .txt or .docx only.
- A recommended file size limit is 5MB to avoid browser slowdowns.
- Both start and end line values are required.
- Start line must not be greater than end line.
- Line numbers must exist inside the file range.
- Content is displayed exactly as it appears in the file.

**Security & Privacy Notes**
- Entire processing happens locally in the browser.
- No backend or file upload to server is required.
- No file data leaves the user’s device.
- Does not execute scripts from file input — shown as plain text.
