import express from 'express';

import { json, urlencoded } from 'body-parser';

import cors from 'cors';

import { createQuestionRuntime } from './routes/question-runtime';

const app = express();
//app.set('trust proxy', true);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));

app.get('/',(req,res)=>{
  res.send('Welcome to nodejs token based authentication api using typescript!!!');
});

app.use(createQuestionRuntime);

app.all('*', async (req, res) => {
  //throw new NotFoundError();
});

//app.use(errorHandler);

export { app };
