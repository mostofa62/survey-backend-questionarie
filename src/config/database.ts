import mongoose from 'mongoose';
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const {DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE,DB_USERNAME, DB_PASSWORD} = process.env;





