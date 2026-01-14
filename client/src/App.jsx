
import Card from './component/card'
import NotesForm from './component/NotesForm'

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4">

      {/* Notes Input Section */}
      <div className="w-full max-w-md mb-6">
        <NotesForm />
      </div>

      {/* Notes Display Section */}
      <div className="w-full max-w-4xl">
        <Card />
      </div>

    </div>
  )
}


export default App
