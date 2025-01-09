import {useState} from "react"
import ShowKeyB from "./ShowKeyB"

import Bourd from "./Bourd"
const MainKeyBoered =()=>{
const [letters,setLeters]=useState([])
const [color,setColor]=useState("black")
const [background,setBackround]=useState("white")
const [font,setFont]=useState("Ariel")
const [fontSize,setFontSize]=useState(18)
const [ fontWeight,setfontWeight]=useState(200)
const [ textDecoration,settextDecoration]=useState('solid')
const addLetter=(letter)=>{
  const newLeter={letter,color,background,font,fontSize,fontWeight,textDecoration}
  setLeters([...letters,newLeter])
}
return<>
<ShowKeyB letters={letters}/>
<Bourd settextDecoration={settextDecoration} setfontWeight={setfontWeight}setColor={setColor} setBackround={setBackround} setFont={setFont} setFontSize={setFontSize} addLetter={addLetter} setLeters={setLeters} letters={letters}/>
</>
}
export default MainKeyBoered