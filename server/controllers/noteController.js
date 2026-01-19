import Note from "../models/noteModel.js";
import ErrorHandler from "../utils/errorHandler.js";
//create note
const createNote = async (req, res, next) => {
    try {
        const { title, content } = req.body

        if (!title.trim() || !content.trim()) {
            return next(new ErrorHandler("Title and Content are required", 404))
        }
        const note = await Note.create({ title, content })
        res.status(201).json({
            success:true,
            message: "Note Created Successfully",
            note
        })
    } catch (error) {
        next(error)
    }
}

//show all notes
const showNotes = async (req, res, next) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json({
            message: "Fetched notes",
            notes
        })
    } catch (error) {
        next(error)
    }
}


//get the note by id
const getNoteById = async (req, res, next) => {


    const { id } = req.params;
    try {

        const note = await Note.findById(id)
        
        if (!note) {
            return next(new ErrorHandler("No note Found", 404))
        }
        res.status(200).json({
            success:true,
            message: "Found Your Note",
            note
        })
    } catch (error) {
        next(error)
    }

}


//updating the note
const updateNoteById = async(req, res, next)=>{
    const {id} = req.params;
    const {title, content} = req.body;

    try {
        
        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
        if(!note){
            return next(new ErrorHandler("no note found", 404))
        }
        res.status(200).json({
            success : true,
            message : "successfully updated",
            note
        })
    } catch (error) {
        next(error)
    }
}



//deleting note by id
const deleteNoteById = async(req, res, next)=>{
    const {id} = req.params;

    try {
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!deletedNote){
            return next(new ErrorHandler("no note found", 404))    
        }
        res.status(200).json({
            success: true,
            message : "note deleted successfully",
            deletedNote   
        })    
}
     catch (error) {
        next(error)
    }

}


export { createNote, showNotes, getNoteById, updateNoteById, deleteNoteById }