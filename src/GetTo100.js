 import {useState} from "react"
import AddNewUser from "./AddNewUser"
import Play100 from "./Play100"
 const GetTo100=()=>{
const [statuse,setStatuse]=useState(0)
const[users,setUsers]=useState([])
const[winners,setWinners]=useState([])
const addUser=(name)=>{
const user={
id:users.length,
name,
num:Math.floor(Math.random()*99)+1,
steps:0,
win:false,
disabled:true
}
setUsers([...users,user])  
}
const deleteUser=(user)=>{
    const filteredArr=users.filter(element=>{return element.id!=user.id})
    const fixedId=filteredArr.map((element,i)=>{return {...element,id:i}})
    setUsers(fixedId)
}
const update=(user)=>{
    let findUser
    if(user.id===users.length-1)
       {
        findUser=users.find(element=>{return element.id<user.id&&element.win===false})
       }
    else
       {
        findUser=users.find(element=>{return element.id>user.id&&element.win===false})
       }
       if(findUser===undefined)
       {
        findUser=users.find(element=>{return element.id<user.id&&element.win===false})
       }
       if(findUser===undefined)
          findUser={id:users.length}
    const newArr=users.map(element=>{
        if(findUser.id===users.length&&element.id===user.id&&user.num!=100)
            return {...user,disabled:false}

        if(element.id===findUser.id)
        {
            return {...element,disabled:false}
        }
        else{
        if(element.id===user.id&&user.num===100)
            return {...user,win:true}
        else{
            if(element.id===user.id)
                return user
            else
               return element
           }
        }

    })
   
    setUsers(newArr)
    const newU=users.filter((user)=>{
            return user.win
        })
     setWinners(newU)     
        
}
const clickStart=()=>{
setStatuse(2)
const newArr=users.map(user=>{
    if (user.id===0)
        return {...user,disabled:false}
    return user
})
setUsers(newArr)
}
const newGame=()=>{
    setStatuse(1)
    setUsers([])
}

    return <div>
  
    
    <div style={{ background:'blue',color:'white',display:'flex',  width:'100vw', alignItems: "center", justifyContent: "center"}}>
<div style={{fontSize:'4rem',marginRight:"2rem" }}>get100</div>
<button onClick={()=>{setStatuse(1)}}>add users</button>
<button onClick={clickStart} disabled={users.length<2}>start game</button>
<button onClick={newGame} disabled={statuse!=2}>new game</button>
</div>
<div style={{display:'flex'}}>
<div style={{width: '15vw',borderRight: "solid 1px black "}}>
    <h1>useres:</h1>
{users.map((user)=>{
    return <div style={{display:"flex",marginTop:"2rem"}}><h1>{user.name}</h1><span style={{borderRadius: "50%",border: "solid 1px black" ,marginLeft:"2rem",background:"gray"}}>{user.num}</span></div>
})}
<h1>wineres:</h1>
{winners.map((user)=>{
    return <div><h1>{user.name}</h1><h4>{user.steps}</h4></div>
})}
</div>
<br/>
<div style={{width: '65vw'}}>
{statuse===1&&<AddNewUser addUser={addUser} users={users}/>}
{statuse===2&&<Play100 update={update} users={users} deleteUser={deleteUser}/>}</div>
</div>
</div>
 }
export default GetTo100