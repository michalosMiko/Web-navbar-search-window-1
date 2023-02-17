import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import movies from "../data"
import "./OneMovie.css"

// vid 16
const OneMovie = () => {
   

const {movieId} = useParams()

const oneSpecificMovie = movies.find( (oneMovie) => {
  
  // === rovná se i datový typ, == rovná se ale ne datový typ, parseInt převede na číslo
  return oneMovie.id === parseInt(movieId)
} )

const {image, title, description, tags} = oneSpecificMovie

return <section className="one-movie-more">
  <h2>{title}</h2>
  <img src={image} alt="" />
  <p>{description}</p>
  <p>{tags}</p>
  <Link to="/movies">Zpět na všechny filmy</Link>
</section>


}

export default OneMovie