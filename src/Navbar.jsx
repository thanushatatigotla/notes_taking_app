import React from 'react'
import { useContext } from 'react'
import { ContextApi } from './Notecontext'

const Navbar = () => {
  let {theme,toggleTheme}=useContext(ContextApi)
  return (
    <div className={`navbar ${theme}`}>
        <h1>Notes-Taking-app</h1>
        <button  className={`navbtn ${theme}`} onClick={toggleTheme}>{theme=="light"?"Dark mode":"Light mode"}</button>

        </div>
  )
}

export default Navbar