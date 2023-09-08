import React from "react"
import {useContext} from "react"
import { ThemeContext } from "../App.js"

export default function Card(props) {
    const [ theme, toggleTheme ] = useContext(ThemeContext)
    return (
        <div className={`card ${theme}-theme`} id="card">
            <img src={`${props.item.photo}`} className="card--image" />
            <div className="card--stats">
                <h3 className="card--title" id="title">{props.item.title}</h3>
                <p className="gray">Population: {props.item.population}</p>
                <p className="gray">Region: {props.item.region} </p>
                <p className="gray">Capital: {props.item.capital}</p>
            </div>
        </div>
    )
}