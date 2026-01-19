import React from 'react'
import NotesForm from '../component/NotesForm'
import Card from '../component/Card'

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row
  gap-6 p-4' >
      <NotesForm/>
        <Card />
    </div>
  )
}

export default HomePage
