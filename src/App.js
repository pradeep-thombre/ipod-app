
import './App.css';
import Controls from './components/Controls';
import Screen from './components/Screen'
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {

      // controls what component is visible on the screen
      visible: "",

      // position of cursor/active list-item in current list 
      currentPositionCursor :3 ,

      // position of cursor/active list-item of previous list which was used to open current list . it is used when we move back to outer menu ,the list-item is highlighted
      previousPositionCursor :1 ,

      // below arrays are used to set value of visible in stae while traversing through UI
      menu : ["","gallery","music","games","setting" ] ,
      music :["","musicPlayer","songs","playList","artist"]
    }
  
    this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
    this.updateList = this.updateList.bind(this) ;
  }

  // this function helps us move from current-list to previous outer list 
  changeMenuVisibility(elementToDisplay){
    // toggles visibility of outermost menu
    if (this.state.visible === "menu" || this.state.visible === "")
        this.setState((prevState) => {
          return {  visible: ("" == prevState.visible) ? "menu" : "" ,
          currentPositionCursor:1}
        });
        // helps us get back to previous menu from current menu
    else if (this.state.visible=="musicPlayer" ||this.state.visible =="artist" ||this.state.visible =="playList" ||this.state.visible =="songs" )  
    {
      this.setState((prevState) => {
        return {  visible:"music" 
          // , currentPositionCursor:prevState.previousPositionCursor
      }
      });
    }  
    else
    {
        this.setState((prevState) => {
        return { visible: "menu" , currentPositionCursor:prevState.previousPositionCursor }
      });
    }   
  }


  //  open sublists from current list
  updateList (elementToDisplay ){ 
    // open  a sublist from "menu" list
    if (this.state.visible == "menu")
    this.setState((prevState) => {
      
      return { visible:prevState.menu[this.state.currentPositionCursor] ,
              previousPositionCursor: prevState.currentPositionCursor ,
              currentPositionCursor : 1
      } 
    });
    // open  a sublist from "music" list
    if  (this.state.visible == "music")
    {
      this.setState((prevState) => {
      
        return { visible:prevState.music[this.state.currentPositionCursor] ,
                //  previousPositionCursor: prevState.currentPositionCursor ,
        } 
      });
    }
  }



  //  move the cursor up and down in the current list
  cursorMovement = (direction) =>{
    // move the cursor 1 position down the list
    if(direction < 0){
      this.setState( (prevState) => {
        return { currentPositionCursor : (prevState.currentPositionCursor==4)?1:prevState.currentPositionCursor+1}
      });
    }
    else{
      this.setState((prevState) => {
        return { currentPositionCursor : (prevState.currentPositionCursor==1)?4:prevState.currentPositionCursor-1} ;
      }) ;
    }
  }

  render(){
    return (
      <div style={styles}>
        <Screen state={this.state} setVisible={this.changeMenuVisibility} setListToDisplay={this.updateList}  />
        <Controls state={this.state} setVisible={this.changeMenuVisibility} setListToDisplay={this.updateList} moveCursor={this.cursorMovement}  />
      </div>
    );
  }
}
const styles = {
  width: "300px",
  height: 500,
  position: "fixed",
  backgroundColor: "#D7D7D7",
  backgroundSize:"161%",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "30px",
  borderRadius: "35px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  boxShadow: "0px 0px 20px 1px inset rgba(0,0,0,0.4)",
  "-webkit-box-reflect": "below 4px linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"

}

export default App;
