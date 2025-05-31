import express from "express";
import {UploadController,DownloadController} from "../controller/uploadcontroller.js";
import storage from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", storage.single('file'), UploadController); // Make sure 'upload' is the handler function
router.get("/files/:fileId", DownloadController); 

export default router;