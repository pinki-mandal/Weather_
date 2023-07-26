import React,{useState, useEffect} from 'react'
import axios from 'axios'
const App=()=>{
   const [num,setnum]=useState(3)
   const [name,setname]=useState()
   const [moves,setmoves]=useState()
   useEffect(()=>{

       async  function getData(){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    setname(response.data.name)
    setmoves(response.data.moves.length)
    }
   getData();
   })
   return(
   <>
    <h1>choose the value <span style={{color:"red"}}>{num} value</span></h1>
    <h1> my name is <span style={{color:"blue"}}> {name}</span></h1>
    <h1>I have <span style={{color:"red"}}>{moves} value</span></h1>
            <select value={num}  onChange={(event)=>{
             setnum(event.target.value)
             }}>
               <option value="3">3</option>
               <option value="5">5</option>
               <option value="25">25</option>
               <option value="10">10</option>
               <option value="1">1</option>
               </select>
               </>
   )
               
     
   }
export default App