import React from "react"
import { createContext, useContext, useState } from 'react'
import { ThemeContext } from "../App.js"



export default function Navbar() {
    console.log({ThemeContext})
    const [ theme, toggleTheme ] = useContext(ThemeContext)
    return (
        <nav className={`nav-bar`} id="nav-bar">
            <h3 className="nav--title" id="nav--title">Where in the world?</h3>
            <button  
                onClick={toggleTheme} 
                className={`${theme}-mode-btn`} 
                id="dark-mode-btn">
                    <i className="fa-regular fa-moon"></i>
                    Dark Mode
            </button>
        </nav>
    )
}