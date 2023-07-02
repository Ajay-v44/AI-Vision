import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration as OpenAIConfiguration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new OpenAIConfiguration({
  apikey: process.env.open_ai_key,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.send('Hello from OpenAI');
});

export default router;
