import SingleLeter from "./SingleLeter"
const ShowKeyB=({letters})=>{
return<><div style={{width:"95vw",height:"65vh",whiteSpace:"pre-wrap"}}> 
{letters.map(single=><SingleLeter single={single}/>)}
</div></>

}
export default ShowKeyB