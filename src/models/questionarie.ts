import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const questionarieSchema = new Schema({}, { strict: false });
const QuestionarieModel = mongoose.model('questionarie',questionarieSchema);
export default QuestionarieModel;