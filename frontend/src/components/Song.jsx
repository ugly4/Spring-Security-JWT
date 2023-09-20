import React from "react";
import "./Song.css"
import AudioPlayer from "./AudioPlayer";
const Song = ({props}) =>{

    return(
        <div className="song_template">
            <img className="cover" src={props.cover} alt={props.songName}/>
            <div className="" style={{width: "100%"}}>
                <p className="artist">
                    {props.artist}
                </p>
                <p className="song_name">
                    {props.songName}
                </p>
                <AudioPlayer />
            </div>
        </div>
    )
}

export default Song;