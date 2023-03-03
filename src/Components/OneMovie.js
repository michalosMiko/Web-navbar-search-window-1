import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import movies from '../data';
import './OneMovie.css';
import RatingComponent from "./Rating"
import { TextToSpeechDescription } from './TextToSpeech';
// TextToSpeechDirector, TextToSpeechCast
const OneMovie = () => {
  const { movieId } = useParams();

  const oneSpecificMovie = movies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieId);
  });

  // const { id, image, title, description, Informace, directorSpeech, castSpeech, tags, price } = oneSpecificMovie;

  const { id, image, title, description, Informace, tags, price } = oneSpecificMovie;
  return (
    <section className="one-movie-more">
      <div className='id-oneMovie'><p>{id}</p></div>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{description}</p>
      <h2>{price}</h2>
      
      <TextToSpeechDescription text={Informace} />
      {/* <TextToSpeechDirector text={directorSpeech} /> */}
      {/* <TextToSpeechCast text={castSpeech} /> */}

      <p>{tags}</p>
      <Link to="/movies">Zpět na všechny produkty</Link>
      <RatingComponent />
    </section>
  );
};

export default OneMovie;
