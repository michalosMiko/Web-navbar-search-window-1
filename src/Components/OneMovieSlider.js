import "./OneMovieSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react"
import data from "../data"



const OneMovieSlider = () => {
    
    const [index, setIndex] = useState(0)
    // useEffect točí dokola 
useEffect( () => {
    if (index < 0){
        setIndex(data.length - 1)
    }else if(index > data.length -1){
        setIndex(0)
    }
}, [index])

// AUTOMATICKÉ POSOUVÁNÍ 109
    useEffect( () => {
   let setIntervalID = setInterval(() => {
        setIndex(index + 1)
        }, 10000);
        return () => clearInterval(setIntervalID)
    }, [index])

    return <section className="all-movies">
        <div className="all-movies-content">
            {data.map( (oneMovie, oneMovieIndex) => {
                const {id, image, age, tags, description } = oneMovie

                //const + možno doplnit nadpis castSpeech, title, 

                let mainClass = "next-slide"
                if (oneMovieIndex === index){
                    mainClass = "active-slide"
                }
                if (oneMovieIndex === index -1 || (index === 0 && oneMovieIndex === data.length - 1)){
                    mainClass = "last-slide"
                }
// <h2>{title}</h2>
                return <article key={id} className={mainClass}>
                    <img src={image} alt="" />
                    
                    <p>{description}</p>
                    <p>{tags}</p>
                    <p>{age}</p>


                </article>
            })}
        </div>

        <div className="slider-button">
        <button onClick={ () => setIndex(index -1)}>
            <FaArrowAltCircleLeft/>
        </button>
        <button onClick={ () => setIndex(index +1)}>
            <FaArrowAltCircleRight/>
        </button>
        </div>
       
    </section>
}
export default OneMovieSlider
