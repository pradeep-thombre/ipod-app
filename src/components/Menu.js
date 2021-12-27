import React from "react"

const styles ={
    width:"48%" ,
    backgroundColor:"white",
    height:"100%",
    paddingTop:"16px",
    boxSizing:"border-box",
    paddingLeft: "0px" ,
    paddingRight : "0px",
    animation : "appear .3s linear ",
    border:"2px solid black"
}
const h1={
    paddingLeft:"8px"
}
const liStyle= {
    paddingLeft:"20px" ,
    paddingTop: "3px" ,
    paddingBottom: "3px",
    
} ;
class MainMenu extends React.Component
{
    componentDidMount(){
        // the code below sets an item in the list to active when component loads using state of app component
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`) ;
         activeElement.classList.add("active") ;
    }
    componentDidUpdate(prevProps){
        // the code below sets an item in the list to active when component updates using state of app component
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`) ;
        // removes active class from previous active list item in the list when component updates
        document.querySelector(`#item${prevProps.state.currentPositionCursor}`).classList.remove("active")
        // adds active class  to current list item
        activeElement.classList.add("active") ;        
    }
    render(){    
   
        return (
            <div style={styles} >
                <h1 style={h1}>iPod.js</h1>
                        <ul id="list"  style={ {listStyleType:'none', paddingLeft:"0px" }}>
                            
                            <li id="item1" style={liStyle} data-active = "music">
                                Gallery
                            </li>

                            <li id="item2" style={liStyle} onClick={ () =>{this.props.setListToDisplay("music")} }>
                                Music
                            </li>

                            <li id="item3"style={liStyle} onClick={ () =>{this.props.setListToDisplay("games")} }>
                                Games
                            </li>

                            <li id="item4" style={liStyle} onClick={ () =>{this.props.setListToDisplay("setting")} }>
                                setting
                            </li>
                        </ul>
            </div>
        ) ;
    
    }
}



export default MainMenu ;