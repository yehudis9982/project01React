import HibruwBoerd from "./HibruwBoerd"
import EnglishBoured from "./EnglishBoured"
import {useState} from "react"
import Simbles from "./Simbles"
import UperCase from "./UperCase"
import Numbers from "./Numbers"
import Chars from "./Chars"
import './stylBourd.css'
const Bourd=({settextDecoration,setColor, setBackround ,setFont ,setFontSize, addLetter,setLeters,letters,setfontWeight})=>{
    const [changeKeyB,setChangeKeyB]=useState(1)
    const changeKey=()=>{
    if(changeKeyB===6)
        setChangeKeyB(1)
    else
       setChangeKeyB(changeKeyB+1)
    }
    const changeKeyHe=()=>{
        if(changeKeyB!=1)
            setChangeKeyB(1)
        else
           setChangeKeyB(2)
        }
    const uperCase=()=>{
       const newLeters=letters.map(l=>{
            return {...l,letter:l.letter.toUpperCase()} 
        })
        setLeters(newLeters)
    }
    const lowerCase=()=>{
      const  newLeters=letters.map(l=>{
            return{...l,letter:l.letter.toLowerCase()} 
        })
        setLeters(newLeters)
    }
return<div id='contanerBourd'style={{height: '35vh',width:' 95vw', display: 'grid',gridTemplateColumns:'8% 8% 8% 8% 8% 8% 8% 8%',gridTemplateRows:'6vh 6vh 6vh 6vh 6vh',justifyContent:' space-between',backgroundColor: 'gray',   alignContent: "space-between"}}>
<button onClick={uperCase} style={{gridArea:'1/3/2/4'}}> A+</button>
<button onClick={lowerCase} style={{gridArea:'1/4/2/5'}}> A-</button>
<button onClick={()=>{settextDecoration("underline")}} style={{gridArea:'1/2/2/3'}}> U</button>
<button onClick={()=>{setfontWeight("bolder")}} style={{gridArea:'1/1/2/2'}}> B</button>
<button onClick={changeKey}style={{gridArea:'4/8/5/9'}}> shift</button>
<button onClick={()=>{addLetter(" ")}} style={{gridArea:'5/3/6/7',width:'40vw'}}> spaseBar</button>
<button onClick={()=>{setLeters(letters.slice(0,letters.length-1))}}style={{gridArea:'2/8/3/9'}} >delete</button>
<button onClick={()=>{setLeters([])}} style={{gridArea:'5/8/6/9'}}>clear</button>
<button onClick={()=>{addLetter("\n")}} style={{gridArea:'3/8/4/9'}}>enter</button>
<button onClick={()=>{setChangeKeyB(3)}} style={{gridArea:'5/7/6/8'}}>Simbles</button>
<button onClick={()=>{setChangeKeyB(4)}} style={{gridArea:'5/1/6/'}}>Cap</button>
<div style={{gridArea:'1/8/2/9'}}><lable for="back">back</lable>
<input id="back" type="color" onChange={(e)=>setBackround(e.target.value)} /></div>
<div style={{gridArea:'1/7/2/8'}}><lable for="color">color</lable>
<input id="color"type="color" onChange={(e)=>setColor(e.target.value)} /></div>
<select  onChange={(e)=>setFontSize(e.target.value)} style={{gridArea:'1/5/2/6'}}>
    <option value='18'> 18</option>
    <option value='26'> 26</option>
    <option value='32'> 32</option>
    <option value='40'>40 </option>
    <option value='60'> 60</option> 
</select>
<select  onChange={(e)=>setFont(e.target.value)} style={{gridArea:'1/6/2/7'}}>
    <option value='monospace'> monospace</option>
     <option value='Segoe UI'> Segoe UI</option>
    <option value='Georgia'> Georgia</option>
    <option value='Impact'>Impact </option>
    <option value='Cochin'> Cochin</option>  
</select>

<button onClick={changeKeyHe} style={{gridArea:'5/2/6/3'}}>{changeKeyB!=1?'עברית':"English"}</button>

<div style={{gridArea:'2/1/5/8'}} >
{changeKeyB===3&&<Simbles addLetter={addLetter}/>}
{changeKeyB===4&&<UperCase addLetter={addLetter}/>}
{changeKeyB===1&&<HibruwBoerd addLetter={addLetter}/>}
{changeKeyB===2&&<EnglishBoured addLetter={addLetter}/>}
{changeKeyB===5&&<Numbers addLetter={addLetter}/>}
{changeKeyB===6&&<Chars addLetter={addLetter}/>}</div>
<button onClick={changeKey}style={{gridArea:'4/1/5/2'}}> shift</button>
</div>
}
export default Bourd