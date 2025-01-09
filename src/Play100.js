import UserCard from "./UserCard"



const Play100=({users,update,deleteUser})=>{
    return <><div style={ {display:"flex" ,width:"70vw",height:'70vh' ,flexWrap:" wrap",color:'navy',justifyContent: "space-between",alignItems: "center"}}>
    {users.map(user=>{return <UserCard user={user} update={update} deleteUser={deleteUser}/>})}
    </div>
    </>
}
















export default Play100