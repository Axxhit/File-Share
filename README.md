# File Sharing Application
A website that helps to provide a shareable link

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/file-sharing-app.git
```
2. Install the dependencies:
```
cd file-sharing-app
npm install
```
3. Create a `.env` file in the root directory and add the following environment variables:
```
MONGODB_URL=<your-mongodb-connection-string>
BACKEND_URL=http://localhost:3000
```
4. Start the development server:
```
npm start
```

## Usage

1. Click the "Select File to Upload" button and choose a file to upload.
2. Wait for the upload to complete.
3. Copy the unique download link and share it with others.

## API

### Upload File
- **Endpoint**: `POST /upload`
- **Request**: `FormData` with `file` field
- **Response**: `{ path: <download-link> }`

### Download File
- **Endpoint**: `GET /files/:fileId`
- **Response**: The downloaded file

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests, use the following command:
```
npm test
```
