
import axios from 'axios';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Posts from '../Posts';
import Products from '../Products';
import Section from '../Section';

export default function Profile() {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const getUserDetails = async () => {
       
        try {
            const res = await axios.get('https://scout-verse-backend.onrender.com/auth/me', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            console.log(res)
            localStorage.setItem('userDetails', JSON.stringify(res.data))
            setData(res.data)

        } catch (err) {
            console.log(err)
            if (err.request.status === 500) {
                navigate('/signin')
            }
        }
    }
    console.log(data);
    return (
        <div className='structure'>
        <Navbar/>
      <div id="cursor"></div>
      <div id="main">
          <Section/>
          <Products/>
          <Posts/>
          <Footer/>
          
      </div>
      </div>
    );
}