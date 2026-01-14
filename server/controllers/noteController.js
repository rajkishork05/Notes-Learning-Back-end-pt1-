import Note from "../models/noteModel.js";

const createNote  = async(req, res)=>{
   try {
     const {title, content} = req.body

    if(!title || !content){
        return res.status(400).json({
            message:"Title and Content are required"
        })
    }
    const note = await Note.create({title, content})
    res.status(201).json({
        message:"Note Created Successfully"
    })
   } catch (error) {
    res.status(500).json({
        message: "Server error",
        error : error.message
    })
   }
}

const showNotes = ()=>{
    
}


export {createNote}