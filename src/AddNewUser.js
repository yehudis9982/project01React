import {useState} from "react"
const AddNewUser=({addUser,users})=>{
    const [name,setName]=useState("")
    const clickAdd=()=>{
        addUser(name)
        setName("")
    }
    return <div style={{ display:'flex', flexDirection: 'column' , justifyContent: 'center'}}>
<input placeholder="name" value={name} id="writeName" onChange={(e)=>{setName(e.target.value)}} style={{margin:'4vh', height: '6vh', width: '30vw'}}/>

<button onClick={()=>{clickAdd()}}  style={{margin:'4vh', height: '6vh', width: '10vw'}}>add user</button>
</div> 
}
export default AddNewUser