import Note from "../models/noteModel.js";

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and Content are required"
            })
        }
        const note = await Note.create({ title, content })
        res.status(201).json({
            message: "Note Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

const showNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json({
            message: "Fetched notes",
            notes
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        })
    }
}

const getNoteById = async (req, res) => {


    const { id } = req.params;
    try {

        const note = await Note.findById(id)
        
        if (!note) {
            return res.status(404).json({
                message: "No note found"
            })
        }
        res.status(200).json({
            message: "Found Your Note",
            note
        })
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        })
    }






}

export { createNote, showNotes, getNoteById }