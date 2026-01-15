import express from "express";
import { createNote, deleteNoteById, getNoteById, showNotes, updateNoteById } from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.post("/create", createNote);
noteRouter.get("/show", showNotes);
noteRouter.get("/get/:id", getNoteById);
noteRouter.put("/update/:id", updateNoteById)
noteRouter.delete("/delete/:id", deleteNoteById)

export default noteRouter