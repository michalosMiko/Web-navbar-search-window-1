import "./Serials.css"
import { useState, useEffect } from "react"
import allMovies from "../data"

const Serials = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect( () => {
    const moviesAfterFilter = allMovies.filter( (oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredMovies(moviesAfterFilter)
  }, [searchingText])

  return <div className="movies-box">
  <form>
    {/* onChange zachytí změnu */}
    <input type="text" placeholder="hledaný produkt" onChange={
       (e) => {setSearchingText(e.target.value)} }/>
    </form>  
      <div className="all-movies">
        {filteredMovies.map( (oneMovie) => {
            const {id, image, title, age, tags, description } = oneMovie
            return <div key={id} className="one-movie">
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
        } )}
      </div>

</div>




  // return <section>
    
  //   <h1>Seriály</h1>
  // </section>
}

export default Serials