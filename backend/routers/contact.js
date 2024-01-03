import {createContactQuery, getallContactQ} from "../controller/contact.js";
import express from "express";


const router = express.Router();

router.post("/contact", createContactQuery);  

router.get("/", getallContactQ);


export default router;