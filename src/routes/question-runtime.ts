import express, { Request, Response } from 'express';
import QuestionarieModel from '../models/questionarie';
const router = express.Router();
router.post(
    '/api/question-runtime',
    async (req: Request, res: Response) => {
        let body = req.body;
        //const testCollectionData = new TestCollection(body);
        //const data = await testCollectionData.save();
        
        const questionarieData = new QuestionarieModel(body);
        const data = await questionarieData.save();
      res.status(201).send(data);
    }
  );



export { router as createQuestionRuntime };