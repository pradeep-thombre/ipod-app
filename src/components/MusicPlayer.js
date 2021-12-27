import React from "react";
import music from "./assets/music.jpg"
import song from "./assets/RaRa_Tanaji.mp3";
class MusicPlayer extends React.Component {
   render()
   {
    return(
        <div style = { styles } >
            <audio autoPlay src={song}>Audio</audio>
        </div>
    );
    }
}

const styles = {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    boxSizing: "border-box",
    paddingBottom: "16px",
    backgroundImage :`url(${music})` ,
    backgroundSize:"cover"

}



export default MusicPlayer;