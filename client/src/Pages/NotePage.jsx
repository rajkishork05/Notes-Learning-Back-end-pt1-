import React, { useContext, useEffect, useState } from 'react'
import { contextApiData } from '../context/ContextApi'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const NotePage = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();
    const { Api, setFetchNotes } = useContext(contextApiData)
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const getNote = async (id) => {
            try {
                const res = await axios.get(`${Api}/get/${id}`)
                const { note, success, message } = res.data
                if (!success) {
                    return toast(message)
                }
                setTitle(note.title)
                setContent(note.content)
            } catch (error) {
                console.log(error.message)
            }
        }
        getNote(id)
    }, [id, Api])

    const updateHandler= async()=>{
        try {
            if(!title.trim() || !content.trim()){
                return toast("title and content cannot be empty")
            }

            const res = await axios.put(`${Api}/update/${id}`, {title, content})
            
            const {note, success, message} = res.data;
            if(!success){
                return toast(message)
            }
            toast(message)
            setFetchNotes(prev => prev.map(n => (n._id === note._id? note : n)))
            navigate("/")
        } catch (error) {
            toast(error.message)
        }
    }



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black
                flex items-center justify-center px-6 py-12">

            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl
                  border border-white/10 rounded-3xl
                  shadow-2xl p-8 md:p-14 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                    {/* Title Input */}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title..."
                        className="w-full md:w-3/4
                   bg-transparent
                   text-4xl md:text-5xl lg:text-6xl
                   font-extrabold text-white
                   placeholder-gray-500
                   outline-none
                   border-b border-white/20
                   focus:border-emerald-500
                   pb-3 transition-all"
                    />

                    {/* Save Button */}
                    <button
                    onClick={updateHandler}
                        className="px-8 py-4 rounded-2xl
                   bg-emerald-500 hover:bg-emerald-600
                   text-white text-lg font-bold
                   shadow-lg hover:shadow-emerald-500/30
                   transition-all active:scale-95
                   self-start md:self-auto">
                        💾 Save
                    </button>
                </div>

                {/* Content Editor */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your note..."
                    className="w-full min-h-[300px] md:min-h-[420px]
                 bg-transparent
                 text-lg md:text-xl lg:text-2xl
                 text-gray-300
                 placeholder-gray-500
                 leading-relaxed
                 resize-none
                 outline-none
                 border border-white/10
                 rounded-2xl
                 p-6
                 focus:border-emerald-500
                 transition-all"
                />

            </div>
        </div>


    )
}

export default NotePage
