
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import NotePage from './Pages/NotePage';
import HomePage from './Pages/HomePage';




const App = () => {

  return (
  <div className="
  min-h-screen w-full
  bg-gradient-to-br from-blue-300 to-indigo-700
">
  <ToastContainer autoClose= {2000} />
  
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/showNote/:id' element={<NotePage/>} />
  </Routes>
</div>
  )
}


export default App
