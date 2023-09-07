import React from "react"
import Card from "./Card"
import data from "../data"
// import { ThemeContext } from "../App"

export default function Hero({setSearch}) {
    
    // const { theme } = React.useContext(ThemeContext)

    const [filteredList, setFilteredList] = React.useState(data)
    const [searchQuery, setSearchQuery] = React.useState("")
    
    let cards = data.map(item => <Card key={item.id} item={item} />)
    const [finalCards, setFinalCards] = React.useState(cards)

    const handleSearch = (event) => {
        const query = event.target.value
        setSearchQuery(query)

        const serchList = data.filter((item)=>{
            return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

        setFilteredList(serchList)
        cards = serchList.map(item => <Card key={item.id} item={item} />)
        setFinalCards(cards)
    }

    const onFilterChange = (event) => {
        const selectedRegion = event.target.value

        
        const filterList = data.filter((item) => {
            return item.region.toLowerCase() === selectedRegion.toLowerCase()
        })
        // console.log(filterList)

        setFilteredList(filterList)
        cards = filterList.map(item => <Card key={item.id} item={item} />)
        setFinalCards(cards)
    }
    
  

    return (
        <section>
            <div className="hero">
                <input onChange = {handleSearch} value={searchQuery} className="nosubmit" type="search" placeholder="Search..."/>
                
                <div className="dropdown">
                    <select id="regions" className="reg" name="regions" text="Filter by a region" onChange={onFilterChange}>
                        <option value="all">All Regions</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europ</option>
                        <option value="america">America</option>
                        <option value="africa">Africa</option>
                    </select>
            </div>
           </div>
           <section className="cards-list">
                    {finalCards}
            </section>
        </section>
    )
}