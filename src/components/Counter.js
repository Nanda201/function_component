import { useState } from "react";
function Counter(){
    const [count,counter]=useState(0)
    return(
        <div>
        <h1>counter component</h1>
        <h2>count:{count}</h2>
        <button onClick={()=>counter(count+1)}>increment</button>
        <button onClick={()=>counter(count-1)}>decrement</button>
        </div>
    )
}
export default Counter