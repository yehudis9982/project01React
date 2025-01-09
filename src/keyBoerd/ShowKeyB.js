import SingleLeter from "./SingleLeter"
const ShowKeyB=({letters})=>{
return<><div style={{width:"95vw",height:"55vh",whiteSpace:"pre-wrap"}}> 
{letters.map(single=><SingleLeter single={single}/>)}
</div></>

}
export default ShowKeyB