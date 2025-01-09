const Numbers=({addLetter})=>{
    return<div class="container"> 
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>1</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>2</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>3</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>4</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>5</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>6</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>7</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>8</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>9</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>0</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>=</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>+</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>-</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>/</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>*</button>
    <button onClick={(e)=>{addLetter(e.target.textContent)}}>^</button>
    
    </div>
    }
    export default Numbers