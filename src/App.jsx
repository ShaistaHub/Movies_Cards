import React from 'react'
import './App.css'
import Cdata from './cards'
import Card from './data'


function App() {

return(
  <>
      <h1 className='heading'>Top Six Famous Movies</h1>

       <div className='parentdiv'>
{
  Cdata.map((val)=>{
    return(
     <>
     <Card
     key = {val.id}
   Image={val.image}
   Title={val.title}
   Year={val.year}
   Rating={val.rating}
   Genre={val.genre}
   Director={val.director}
       />
     </>
       
    )})
}
 </div>
<div className='div'>
  <h2>
    Here you will find More interesting movies!
  </h2>
</div>

  </>
)
}
export default App;
