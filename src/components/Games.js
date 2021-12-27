import React from "react";
import snakeNlader from "./assets/snakeNlader.png"
class Games extends React.Component {
   render()
   {
    return(
        <div style = { styles } >
            <img src={snakeNlader} style={imgStyle}></img>
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
}
const imgStyle ={
    width: "100%",
    height: "120%"
}

export default Games;