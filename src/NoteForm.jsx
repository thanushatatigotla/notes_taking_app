import React from 'react'
import { ContextApi } from './Notecontext'
import { useContext } from 'react'

const NoteForm = () => {
  let data=useContext(ContextApi)
  console.log(data)//{state:{...},setState:f}
  let {state,setState,addNote,theme}=data
  console.log(state)
  let{title,description,category}=state
  let handleChange=(e)=>{
    let{name,value}=e.target
    setState({...state,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    addNote(title,description,category)
    setState({title:"",description:"",category:""})
  }
  return (
    <main className='formblock'>
      <form onSubmit={handleSubmit}>
        <div className='formcontent'>
          <label>Title</label>
          <input type="text" name='title' value={title} onChange={handleChange} />
        </div>
        <div className='formcontent'>
          <label>Description</label>
          <textarea rows={10} cols={40} name='description' value={description} onChange={handleChange}></textarea>

        </div>
        <div className='formcontent'>
          <label>Category</label>
          <select name='category' value={category} onChange={handleChange}>
            <option value="">select</option>
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="health">health</option>
          </select>
        </div>
        <div className='formcontent'>
          <button className={`btn ${theme}`}>ADD NOTE</button>
        </div>
      </form>
    </main>
  )
}

export default NoteForm