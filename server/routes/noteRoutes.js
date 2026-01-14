import express from "express";
import { createNote } from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.post("/create", createNote);

export default noteRouter