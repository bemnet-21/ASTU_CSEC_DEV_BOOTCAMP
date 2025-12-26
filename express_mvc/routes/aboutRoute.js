import express from 'express';
import { about } from '../controllers/aboutController';

const router = express.Router();

router.get('/', about)

export default router;
