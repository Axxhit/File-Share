import { useEffect, useRef, useState } from 'react';
import { UploadFile } from './service/api';
import './App.css';

// Toast notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState(null);
  const [uploading, setUploading] = useState(false);

  // useRef to access the file input element
  // This allows us to trigger the file input click programmatically
  const uploadRef = useRef();

  const handleUpload = () => {
    uploadRef.current.click();
  }

  // Function to copy link to clipboard
  const handleCopyLink = () => {
    if (res) {
      navigator.clipboard.writeText(res);
      toast.info("Link copied to clipboard!");
    }
  }

  // API call with data
  useEffect(() => {
    const apiCall = async () => {
      if (file) {
        setUploading(true);
        // call the api to upload
        const fileData = new FormData();
        fileData.append("name", file.name);
        fileData.append("file", file);

        // call the function from api.js with fileData
        try {
          const response = await UploadFile(fileData);
          setRes(response.path);
          toast.success("Upload successful!");
        } catch {
          setRes("Upload failed. Please try again.");
          toast.error("Upload failed. Please try again.");
        }
        setUploading(false);
      }
    }
    apiCall();
  }, [file]);

  return (
    <div className="landing-container">
      {/* Toast container */}
      <ToastContainer position="top-center" />

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span role="img" aria-label="logo"></span> FileShare
        </div>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#howto">How it works</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>

      {/* Main Card */}
      <div className="main-card">
        <h1>File Sharing App</h1>
        <p className="subtitle">Upload and share files instantly with a single link.</p>

        <div>
          <button className="upload-btn" onClick={handleUpload} disabled={uploading}>
            {/* Spinner or Button Text */}
            {uploading ? <span className="spinner"></span> : "Select File to Upload"}
          </button>
          <input
            type="file"
            ref={uploadRef}
            style={{ display: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>

        {res && (
          <div className="result-section">
            <h3>Your file link:</h3>
            <a href={res} target="_blank" rel="noopener noreferrer">{res}</a>
            <br />
            <button className="upload-btn" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={handleCopyLink}>
              Copy Link
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Features</h2>
        <ul>
          <li> Fast and secure file uploads</li>
          <li> Instant shareable links</li>
          <li> Your files are private</li>
        </ul>
      </section>

      {/* How it works Section */}
      <section id="howto" className="howto-section">
        <h2>How it works</h2>
        <ol>
          <li>Click <b>Select File to Upload</b> and choose your file.</li>
          <li>Wait for the upload to finish.</li>
          <li>Copy and share your unique download link!</li>
        </ol>
      </section>

      <footer className="landing-footer">
        <p>Easy file sharing.</p>
      </footer>
    </div>
  )
}

export default App;
