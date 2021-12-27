import React from "react";
import Photos from "./assets/photos.jpg"
class Coverflow extends React.Component {
   render()
   {
    return(
        <div style = { styles } >
            <img src={Photos} style={imgStyle}></img>
        </div>
    );
    }
}
const styles ={ 
    height:"100%" ,
    backgroundColor:"white" ,
    textAlign : "center"   
}

const imgStyle ={
    width: "100%",
    height: "100%"
}

export default  Coverflow ;