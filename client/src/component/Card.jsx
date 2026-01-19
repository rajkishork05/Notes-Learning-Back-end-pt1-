
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useContext} from "react";
import { contextApiData } from "../context/ContextApi.jsx";
import axios from "axios";
dayjs.extend(relativeTime)
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Card = () => {

const navigate = useNavigate()

const {Api, fetchNotes, setFetchNotes} = useContext(contextApiData)



const deleteHandler = async(id)=>{
  try {
    // console.log("deleting note")
    // console.log("not deleting", id)
    const res = await axios.delete(`${Api}/delete/${id}`)
    const {success, message} = res.data;
    if(!success){
      return toast(message)
    }

    setFetchNotes(prev => prev.filter(fetchNotes => fetchNotes._id !== id))
    toast(message)
  } catch (error) {
    console.log(error.message)
  }
}


  return (
   <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-4 sm:gap-6
  w-full
  max-h-screen
  overflow-y-auto
  px-1
">
  {fetchNotes.map((elem, idx) => (
    <div
      key={idx}
      className="relative
        bg-white
        rounded-xl
        p-4 sm:p-5
        shadow-md
        border border-gray-100
        hover:shadow-lg
        transition-all
        min-h-[240px] sm:min-h-[260px]
        flex flex-col
        relative
      "
    >
      {/* Index / ID */}
      <span className="
        text-xs
        text-gray-400
        font-mono
        mb-2
        truncate
      ">
        #{idx + 1}
        
      </span>
      <span onClick={()=> deleteHandler(elem._id)} className="absolute right-4 sm:right-6 top-3
             text-red-600 text-lg font-extrabold cursor-pointer
             hover:scale-145 transition-transform w-fit" > X </span>

      {/* Title */}
      <h1 className="
        text-base sm:text-lg
        font-semibold
        text-gray-800
        mb-1
        line-clamp-1
      ">
        {elem.title}
      </h1>

      {/* Content */}
      <p className="
        text-gray-600
        text-sm
        line-clamp-3 sm:line-clamp-4
        mb-4
      ">
        {elem.content}
      </p>

      {/* Footer */}
      <div className="
        mt-auto
        flex
        items-center
        justify-between
        gap-2
      ">
        <time className="
          text-xs
          font-semibold
          bg-black/80
          px-3 py-1
          rounded-2xl
          text-gray-300
          whitespace-nowrap
        ">
          {dayjs(elem.createdAt).fromNow()}
        </time>

        <button
          className="
            text-xs sm:text-sm
            font-semibold
            bg-blue-600
            hover:bg-blue-700
            px-4 py-2
            rounded-2xl
            text-white
            active:scale-95
            transition
          "
          onClick={()=> navigate(`./showNote/${elem._id}`)}
        >
          Open
        </button>
      </div>
    </div>
  ))}
</div>




  )
}

export default Card
