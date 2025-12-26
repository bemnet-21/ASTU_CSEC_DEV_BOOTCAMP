import express from 'express';
import { addContact } from '../controllers/contactController';

const router = express.Router();

router.get('/', addContact)

export default router;