import React, { useContext } from 'react'
import Navbar from './Navbar'
import NoteForm from './NoteForm'
import DisplayNotes from './DisplayNotes'
import Notecontext, { ContextApi } from './Notecontext'

const App = () => {
  let {theme}=useContext(ContextApi)
  return (
    <div >
        <Navbar/>
        
        
        <div className={`notescontainer ${theme}`}>
        <NoteForm/>
        <DisplayNotes/>
        </div>
        
    </div>
  )
}

export default App