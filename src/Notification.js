import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    localStorage.removeItem("token")
    navigate('/signin')
}
const [data,setData]=useState();
const getUserDetails = async ()=>{
  try{
    const res= await axios.get('https://scoutverse.onrender.com/auth/me', {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
  })
  console.log(res)
  localStorage.setItem('userDetails', JSON.stringify(res.data))
  setData(res.data)
  }
  catch (err) {
    console.log(err)
    if (err.request.status === 500) {
        navigate('/signin')
    }
}
}
useEffect(() => {
  getUserDetails()
}, []);
  return (
    <div className="si">
      <div className="notification">
      <main>
      <div className="card-2">
        <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1701711417/339993515_620378456147197_6430487127368903313_n_vjcp3b.jpg" alt="" />
        <div className="card-content">
          <h2>{data && data.firstname}{data && data.lastname}</h2>
          <p>{data && data.email}</p>
          <a href="#" className="button">
            <span className="material-symbols-outlined">
            {data && data.createdAt}
            </span>
          </a>
        </div>
      </div>
    </main>

    
      

   
      <div className="view-all">
        <div>
          {/* <img src={eye} alt="eye" /> */}
        </div>
        <div className="view-all-btn" onClick={handleLogout}>LOG OUT</div>
      </div>
    </div>
    </div>
  );
};

export default Notification;