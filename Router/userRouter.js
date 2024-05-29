import express from "express";
import { adddata, getuser } from "../Controller/userController.js";

const router =express.Router();
router.post('/adduser',adddata);
router.get("/",getuser);

export default router