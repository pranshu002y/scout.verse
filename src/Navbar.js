import React from "react";
import { useState } from "react";
import Notification from "./Notification";
const Navbar = () => {
  
  const [showModal , setShowModal]=useState(false);
    const openModal =()=>{
        setShowModal(true);
    };
    const closeModal =()=>{
        setShowModal(false);
    };
  return (
    <div>
        {showModal && <Notification setShowModal={setShowModal}/>}
      <div id="nav">
        <div id="nav-part1">
          <h1>Scout Verse Co.</h1>
        </div>
        <div id="nav-part2">
          <div id="links">
            <a href="#">Shop</a>
            <a href="#">Events</a>
            <a href="#">Games</a>
            <a href="#">Donate</a>
          </div>
          <div id="icons"onClick={()=>{
                if(showModal){
                    closeModal();
                }else{
                    openModal();
                }
            }} >
            <h1> Hi_Lolla</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
