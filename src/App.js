import React from "react"
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data"
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export default function App() {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    console.log(theme)
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            <main className={`${theme}-theme`} >
                <Navbar />
                <Hero />
            </main>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
