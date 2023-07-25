import React from 'react'
import { useState } from 'react';
import './Navbar.css'
function Navbar() {
    const [expand,setExpand]=useState(false);


   const items=['Home','Education','Project','Contact']
  return (

    <div>
        <div className="navbar slide-in ">
   
        <div className='navName'>Vikas Rajput </div>
      


        <div  className="mobile" >
          <button  onClick={()=>{setExpand(!(expand))}}>{expand ? 'x' :'▾'}</button>
          <ul   className="mobileNav">
            { expand ?items.map((items,i)=>(
                <div><li className="mItems"key={i}><a href={`/${items.toLowerCase()}`}>{items}</a></li></div>
            )) :null}
          </ul>
        </div>
   
      
          <ul className="upperNav">
         
            { items.map((items,i)=>(
                <li className="lists"key={i}><a href={`/${items.toLowerCase()}`}>{items}</a></li>
            )) }
          </ul>
       
    </div>
    </div>
  )
}

export default Navbar