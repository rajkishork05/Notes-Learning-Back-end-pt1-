import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify';
export const contextApiData = createContext();

const ContextApi = ({children}) => {

  const [fetchNotes, setFetchNotes] = useState([])
  const Api = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getALlNotes = async()=>{
      const response = await axios.get(`${Api}/show`)
      let {message, notes} = response.data
      try {
        if(!notes){
          toast(message || "no notes found")
        }
      setFetchNotes([...notes])
    }catch (error) {
        toast(error.message)
      }}
    getALlNotes();
  }, [Api])
  return (
    <div>
      <contextApiData.Provider value={{Api, fetchNotes, setFetchNotes}} >
        {children}
      </contextApiData.Provider>
    </div>
  )
}

export default ContextApi
