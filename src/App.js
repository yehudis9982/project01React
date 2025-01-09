import GetTo100 from "./GetTo100"
import MainKeyBoered from "./keyBoerd/MainKeyBoered";
import {useState} from "react"
import "./App.css"
function App() {
const [game,setGame]=useState(0)

  return (
    <div className="App">
      <button  style={{background:game===1?"rgb(194, 194, 226)":"blue" ,width:"49vw",height:"5vh" ,color:"white", borderRadius: '0'}} disabled={game===1} onClick={()=>{setGame(1)}}>get to 100</button>
      <button style={{background:game===2?"rgb(194, 194, 226)":"blue",width:"49vw",height:"5vh",color:"white", borderRadius: '0'}}  onClick={()=>{setGame(2)}} disabled={game===2}>keyboered</button>
      <br/>
      {game===1&&<GetTo100/>}
      {game===2&&<MainKeyBoered/>}
    </div>
  );
}

export default App;