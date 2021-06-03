import express from 'express';

import { indexController } from './controllers/indexController.js';

export const router = express.Router();

router.get('/', indexController);
