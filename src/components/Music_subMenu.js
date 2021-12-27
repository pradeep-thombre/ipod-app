import React from "react";

class Music_subMenu extends React.Component {
    componentDidMount() {
        // the code below sets an item in the list to active when component loads using state of app component
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`);
        activeElement.classList.add("active");
    }
    componentDidUpdate(prevProps) {
        // the code below sets an item in the list to active when component updates using state of app component
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`);
        // removes active class from previous active list item in the list when component updates
        document.querySelector(`#item${prevProps.state.currentPositionCursor}`).classList.remove("active")
        // adds active class  to current list item
        activeElement.classList.add("active");

    }
   render()
   {
    return(
        <div style = { styles } >
            <h1>Music</h1>
                    <ul style={ {listStyleType:'none',
                                paddingLeft:"0px" }}>
                        <li id="item1" style={liStyle}>Music player</li>
                        <li id="item2" style={liStyle}>Songs</li>
                        <li id="item3"style={liStyle}>Playlists</li>
                        <li id="item4" style={liStyle}>Artists</li>
                    </ul>
        </div>
    );
    }
}


const styles ={
    width:"48%" ,
    backgroundColor:"white",
    height:"100%",
    paddingTop:"16px",
    boxSizing:"border-box",
    paddingLeft: "8px" ,
    paddingRight : "8px",
    animation : "appear .3s linear "
}
const liStyle= {
    paddingLeft:"20px" ,
    paddingTop: "3px" ,
    paddingBottom: "3px"
} ;

export default Music_subMenu;