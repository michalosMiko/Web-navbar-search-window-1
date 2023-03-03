

import OneMovieSlider from "../Components/OneMovieSlider";
import TextToSpeechDescription from "../Components/TextToSpeech";
import "./Home.css"

const castSpeech = "Vřele vás vítáme na našich stránkách. Nyní máte vyjímečnou možnost zakoupit brožuru ve které máte deset vstupenek za cenu pěti Do divadla U Hasičů. Divadlo u Hasičů se nachází v sousedství Vinohradského divadla. Svým repertoárem a hereckými osobnostmi konkuruje všem známým kamenným divadlům v Praze. Naše divadlo nabízí 342 míst ve 14ti řadách, kde je dobrý kontakt s jevištěm a má bezbariérový přístup.";

const Home = () => {
  return (
    <section>
      <OneMovieSlider />
      <div className="cast-speech" ><TextToSpeechDescription text={castSpeech} /></div>

    </section>
  );
};

export default Home;

