import React from "react";
import background from "./assets/background.jpg";
import Menu from "./Menu";
import Setting from "./Settings"
import Games from "./Games"
import Gallery from "./Gallery";

import Music_subMenu from "./Music_subMenu";
import MusicPlayer from "./MusicPlayer";
class Screen extends React.Component {
    render() {
        // code below displays various components depending on the value of visible in state of app component
        if (this.props.state.visible === "menu") {
            return (<div style={styles}>
                <Menu state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "music") {
            return (<div style={styles}>
                <Music_subMenu state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "setting") {
            return (<div style={styles}>
                <Setting state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "games") {
            return (<div style={styles}>
                <Games state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "gallery") {
            return (<div style={styles}>
                <Gallery   />
            </div>);
        }
        else if (this.props.state.visible == "musicPlayer" ||this.props.state.visible =="artist" ||this.props.state.visible =="playList" ||this.props.state.visible =="songs") 
        {
            return (<div style={styles}>
                <MusicPlayer   />
            </div>);
        }
        
        else return (<div style={styles}>
            {/* return an empty div */}
        </div>);
    }
}
const styles = {
    height: "225px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: 30,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}


export default Screen;