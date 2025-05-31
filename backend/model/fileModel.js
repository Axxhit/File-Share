import mongoose from 'mongoose';
const fileschema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }


});
const FileModel = mongoose.model('files', fileschema);
export default FileModel;
