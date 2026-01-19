import React, { useContext, useState } from 'react'
import { contextApiData } from '../context/ContextApi';
import { toast } from 'react-toastify';
import axios from 'axios';


const NotesForm = () => {

  const {Api, setFetchNotes} = useContext(contextApiData)

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")


  const addNoteHandler = async(e)=>{
    e.preventDefault();
    try {
      if(!title.trim() || !content.trim()){
        return toast("title and content must required")
      }
      const res = await axios.post(`${Api}/create`, {title, content})
      const {success, message, note} = res.data;
      if(!success){
        return toast(message)
      }
      toast(message)
      setFetchNotes(prev => [note, ...prev])
      setTitle("")
      setContent("")
    } catch (error) {
      console.log(error.message)
    }
  }
  


  return (
  <div className="
  w-full
  max-w-full
  sm:max-w-md
  md:max-w-lg
  lg:max-w-xl
  mx-auto
  px-3 sm:px-0
  space-y-5
">

  {/* Create Note Card */}
  <div className="
    bg-white
    rounded-2xl
    p-5 sm:p-8
    shadow-lg
    border border-gray-100
    min-h-[380px] sm:min-h-[420px]
    flex flex-col
  ">
    
    <h2 className="
      text-lg sm:text-2xl
      font-semibold
      text-gray-800
      mb-4 sm:mb-6
    ">
      Create Note
    </h2>

    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder="Title"
      className="
        w-full
        px-4 py-2.5 sm:py-3
        mb-3 sm:mb-4
        border border-gray-200
        rounded-xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        text-sm sm:text-base
      "
    />

    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
      className="
        w-full
        px-4 py-2.5 sm:py-3
        mb-4 sm:mb-6
        border border-gray-200
        rounded-xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        min-h-[150px] sm:min-h-[180px]
        resize-none
        text-sm sm:text-base
      "
    />

    <button className="
      mt-auto
      w-full
      active:scale-95
      transition-all
      bg-blue-600 hover:bg-blue-700
      text-white
      font-medium
      py-2.5 sm:py-3
      rounded-xl
      text-sm sm:text-base
    " onClick={addNoteHandler} >
      Add Note
    </button>
  </div>

  {/* Tagline / Branding Card */}
  <div className="
    bg-gradient-to-r
    from-blue-50 to-indigo-50
    rounded-xl
    p-4 sm:p-5
    border border-blue-100
    text-center
  ">
    <p className="
      text-xs sm:text-base
      text-gray-700
      font-medium
    ">
      Capture your thoughts. Organize your ideas.
    </p>
  </div>

</div>


  );
}
export default NotesForm
