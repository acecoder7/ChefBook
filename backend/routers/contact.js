import {createContactQuery, getallContactQ} from "../controller/contact.js";
import express from "express";


const router = express.Router();

router.post("/contact", createContactQuery);    // https://codechef-bk.onrender.com/api/contact

router.get("/", getallContactQ);     //https://codechef-bk.onrender.com/api/


export default router;