import React from 'react'

const NotesForm = () => {
  return (
    
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Write your note..."
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">
        Add Note
      </button>
    </div>
  );
}
export default NotesForm
