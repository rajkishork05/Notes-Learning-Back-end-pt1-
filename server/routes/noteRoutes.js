import express from "express";
import { createNote, getNoteById, showNotes } from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.post("/create", createNote);
noteRouter.get("/show", showNotes);
noteRouter.get("/get/:id", getNoteById);

export default noteRouter