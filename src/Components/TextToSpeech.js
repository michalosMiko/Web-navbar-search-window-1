import "./TextToSpeech.css"
import { AiFillSound } from 'react-icons/ai';

export function TextToSpeechDescription({ text }) {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className="info-button"><button style={{}} onClick={speak}>
     <div className="icon-info">Informace<AiFillSound /></div>
  </button></div>
  );
}

export function TextToSpeechDirector({ text }) {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <button style={{ backgroundColor: 'green', color: 'white' }} onClick={speak}>
      Director Speak
    </button>
  );
}

export function TextToSpeechCast({ text }) {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={speak}>
      <div className="icon-info2">Vítejte <AiFillSound /></div>
    </button>
  );
}
export default TextToSpeechCast
