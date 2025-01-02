import {getMessages, createMessage, addReaction, toggleStar, deleteMessage} from "../controller/messageSpace.js";
import express from "express";


const router = express.Router();

router.get('/', getMessages);
router.post('/', createMessage);
router.post('/:id/reactions', addReaction);
router.patch('/:id/star', toggleStar);
router.delete('/:id', deleteMessage);

export default router;