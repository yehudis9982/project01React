import './styl100.css'
const UserCard=({user,update,deleteUser})=>{
    const plas1=()=>{
   const newArr={...user,num:user.num+1,disabled:true,steps:user.steps+1}
   update(newArr)
    }
    const minus1=()=>{
        const newArr={...user,num:user.num-1,disabled:true,steps:user.steps+1}
        update(newArr)
         }
    const divide=()=>{
        const newArr={...user,num:user.num/2,disabled:true,steps:user.steps+1}
        update(newArr)
            }
    const caful=()=>{
        const newArr={...user,num:user.num*2,disabled:true,steps:user.steps+1}
        update(newArr)
                }
    return <>
   <div style={{background:user.disabled? "rgb(142, 142, 145)":"white",border:'1px double navy',width:'15vw',height:'40vh',textAlign: 'center',}}>
    <h1>{user.name}</h1>
    <h2 >{user.num}</h2>
    
    {user.win?<div style={{fontSize: '3rem'}}>👍</div>:<div style={{display:user.disabled?'none':'flex',marginLeft: '10%' }}>
    <button  onClick={plas1}  >+1</button>
    <button onClick={minus1}  >-1</button>
    <button onClick={caful}  >*2</button>
    <button onClick={divide}  >/2</button></div>}
    
    
    <div style={{display:'flex',marginLeft: '10%' ,  marginTop: '10%',justifyContent: ' space-around'}}>
    <div>steps: {user.steps}</div>
    <button onClick={()=>{deleteUser(user)}}>leave</button>
    </div>
    </div>
    </>
}
export default UserCard