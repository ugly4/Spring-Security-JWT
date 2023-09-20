import React from "react";
import "./Content.css"
import Song from "./Song";

const song1 = {cover:"https://sun9-51.userapi.com/impg/LZdJUDivlb6tZMORUfosIOkcaipIXXiUhZBeqQ/JJNIA4nRA7w.jpg?size=1234x1260&quality=96&sign=35e2254b777894d87f15ec9eeb41be13&type=album",
                artist:"nekkmetod!",
                songName:"вечер субботы!"}
const song2 = {cover:"https://sun9-14.userapi.com/impg/6brFBMfA2Of19iXkDxPmcqEiIY0mxvvyLmI1jw/lVjtrmMxXV4.jpg?size=431x422&quality=96&sign=f27693bff1804f01962bc26001aaf364&c_uniq_tag=xjK41T6efFmjFegPCLi2gZZ3m1SUL1Ij5bEidKOqE2k&type=album",
                artist:"методстритовнер!",
                songName:"старшие!"}
const songs = [song1, song2];
const Content = () =>{
    return(
            <div className="content" style={{marginTop:"200px"}}>
                 {songs.map((song) => 
                    <Song key={song.songName} props={song} />
                )}
            </div>
    )
}

export default Content;