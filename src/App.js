import React from "react"
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data"


// const ThemeContext = React.createContext()

export default function App() {
    // const [theme, setTheme] = React.useState("light")

    // function toggleTheme() {
    //     setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    // }
    // const cards = data.map(item => <Card key={item.id} item={item} />)        
    return (
        // <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div >
                <Navbar />
                <Hero />
                {/* <section className="cards-list">
                    {cards}
                </section> */}
            </div>
        // </ThemeContext.Provider>
    )
}
