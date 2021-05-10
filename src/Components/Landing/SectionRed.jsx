import { useState, useRef } from "react";
import "./SectionRed.css";
import Button from "../Button";
import speakers from "../../assets/speakers.png";
import TopNav from "../TopNav";
import music from "../../assets/music/island-music.mp3";

const SectionRed = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonDown, setButtonDown] = useState("2px");
  const ref = useRef();

  const playSong = () => {
    ref.current.play();
    setIsPlaying(true);
    setButtonDown("5px");
  };

  const pauseSong = () => {
    ref.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="red-container">
      <TopNav bgColour = "#D34848" liColour="red-li" onClick = {props.onClick} landing={props.landing} />
      <div className="content-container">
        <div className="info">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <Button label="SEE DEMO" background="white" text="#D34848" />
        </div>
        <div className="speakers">
          <img src={speakers} alt="speakers" />
          <div
            className="music-start"
            onClick={isPlaying ? pauseSong : playSong}
            onMouseUp = {() => setButtonDown("2px")}
            style = {{borderWidth: buttonDown}}
          >
            <audio ref={ref} src={music} />
            CLICK
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionRed;
