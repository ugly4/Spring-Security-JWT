import React from "react";
import { useState, useRef } from "react";
import "./AudioPlayer.css"
const AudioPlayer = () =>{
    const audioPlayer = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleLoadMetadata = (meta) => {
        setDuration(audioPlayer.current.duration);
    }

    const play = () => {
      audioPlayer.current.play();
    };
  
    function time_to_minsec(time){
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }
    const pause = () => {
      audioPlayer.current.pause();
    };
  
    const stop = () => {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    };
  
    const onPlaying = () => {
      setCurrentTime(audioPlayer.current.currentTime);
      setSeekValue(
        (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
      );
    };
  
    return (
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <audio
          src="http://music.arizona-rp.com/rodina/1691100513.mp3"
          ref={audioPlayer}
          onTimeUpdate={onPlaying}
          onLoadedMetadata={handleLoadMetadata}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <br />
        <p style={{color:"rgb(138, 0, 0)", fontWeight:"bold"}}>
            {time_to_minsec(currentTime) + "/" + time_to_minsec(duration)} 
        </p>
        <input
          type="range"
          min="0"
          max="100"
          style={{accentColor:"rgb(138, 0, 0)"}}
        //   step="1"
          value={seekValue}
          onChange={(e) => {
            const seekto = audioPlayer.current.duration * (+e.target.value / 100);
            audioPlayer.current.currentTime = seekto;
            setSeekValue(e.target.value);
          }}
        />
        <br />
        <div style={{display:"flex", gap:"10px"}}>
          <button onClick={play}>play</button>
          <button onClick={pause}>pause</button>
          <button onClick={stop}>stop</button>
        </div>
      </div>
    );
}

export default AudioPlayer;