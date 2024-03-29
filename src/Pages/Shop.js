import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../Events.css";
import Loading from "./Loading";
const Shop = () => {
  const navigate= useNavigate();
	const [data,setData] = useState();
	const [imagedata,setimagedata] = useState();
	const [isLoader, setLoader] =useState(true);
	const getimage = async () => {
       
		try {
			const res = await axios.get('https://scout-verse-backend.onrender.com/auth/getimage/image', {
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
	useEffect(()=>{
		getimage()
	},[])

	const getUserDetails = async () => {
       
		try {
			const res = await axios.get('https://scout-verse-backend.onrender.com/auth/getproduct/product', {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
      console.log(res)
      localStorage.setItem('userDetails', JSON.stringify(res.data))
      setimagedata(res.data)
	  setLoader(false);
	
		} catch (err) {
			console.log(err)
			if (err.request.status === 500) {
				navigate('/signin')
			}
		}
	}
	useEffect(()=>{
		getUserDetails()
	},[])
	
  console.log(data);
  console.log(imagedata); 

  return isLoader ? <Loading/>:(
        <div>
            <div className="app">
	<header className="app-header">
	<div className="app-header-logo" onClick={()=> navigate("/Home")}>
			<div className="logo">
				<span className="logo-icon">
					<img src="https://pbs.twimg.com/profile_images/1499265096006000640/ZhEnSTch_400x400.jpg" />
				</span>
				<h1 className="logo-title">
					<span>BGMI</span>
				</h1>
			</div>
		</div>
		<div className="app-header-navigation">
			<div className="tabs">
				<a href="#">
					Overview
				</a>
				
			</div>
		</div>
		<div className="app-header-actions">
			<button className="user-profile">
				<span>{data && data[0].author}</span>
				<span>
					<img src={data && data[0].image_url} />
				</span>
			</button>
			
		</div>
		

	</header>
	<div className="app-body">
		<div className="app-body-navigation">
		<nav className="navigation">
              <a href="">
                <i className="ph-browsers"></i>
                <span  onClick={()=> navigate("/Home")}>Dashboard</span>
              </a>
              <a href="">
                <i className="ph-check-square"></i>
                <span onClick={()=> navigate("/Home")}>Scheduled</span>
              </a>
              <a href="">
                <i className="ph-swap"></i>
                <span onClick={()=> navigate("/Home")}>Instagram</span>
              </a>
              <a href="">
                <i className="ph-file-text"></i>
                <span onClick={()=> navigate("/Home")}>Youtube</span>
              </a>
              <a href="">
                <i className="ph-globe"></i>
                <span onClick={()=> navigate("/Home")}>Contact</span>
              </a>
            </nav>

		</div>
		<div className="app-body-main-content">
			<section className="service-section">
				<h2>Service</h2>
				<div className="service-section-header">
					<div className="search-field">
						<i className="ph-magnifying-glass"></i>
						<input type="text" placeholder="Room number"/>
					</div>
					<button className="flat-button">
						Search
					</button>
				</div>
				<div className="mobile-only">
					<button className="flat-button">
						Toggle search
					</button>
				</div>
				
				


				{data && data.map((e, i) => (
  imagedata && imagedata.length > i ? (
    <main key={i}>
      <div className="card-2">
        <img src={e.image_url} alt="" />
        <div className="card-content">
          <h2>{imagedata[i].Product}</h2>
          <p>{imagedata[i].Category}</p>
          <a href="#" className="button">
            {imagedata[i].Brand}
            <br />
            <span className="material-symbols-outlined">
              {imagedata[i].Price}
            </span>
          </a>
        </div>
      </div>
    </main>
  ) : null
))}



				
			</section>
			<section className="transfer-section">
				<div className="transfer-section-header">
					<h2>Latest transfers</h2>
					<div className="filter-options">
						<p>Filter selected: more than 100 $</p>
					</div>
				</div>
				<div className="transfers">
					<div className="transfer">
						<div className="transfer-logo">
							<img src="https://assets.codepen.io/285131/apple.svg" />
						</div>
						<dl className="transfer-details">
							<div>
								<dt>Apple Inc.</dt>
								<dd>Apple ID Payment</dd>
							</div>
							<div>
								<dt>4012</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>28 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- $ 550
						</div>
					</div>
					<div className="transfer">
						<div className="transfer-logo">
							<img src="https://assets.codepen.io/285131/pinterest.svg" />
						</div>
						<dl className="transfer-details">
							<div>
								<dt>Pinterest</dt>
								<dd>2 year subscription</dd>
							</div>
							<div>
								<dt>5214</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>26 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- $ 120
						</div>
					</div>
					<div className="transfer">
						<div className="transfer-logo">
							<img src="https://assets.codepen.io/285131/warner-bros.svg" />
						</div>
						<dl className="transfer-details">
							<div>
								<dt>Warner Bros.</dt>
								<dd>Cinema</dd>
							</div>
							<div>
								<dt>2228</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>22 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- $ 70
						</div>
					</div>
				</div>
			</section>
		</div>
		<div className="app-body-sidebar">
			<section className="payment-section">
				<h2>New Payment</h2>
				<div className="payment-section-header">
					<p>Choose a card to transfer money</p>
					<div>
						<button className="card-button mastercard">
							<svg width="2001" height="1237" viewBox="0 0 2001 1237" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="a624784f2834e21c94a1c0c9a58bbbaa">
									<path id="7869b07bea546aa59a5ee138adbcfd5a" d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z" fill="currentColor"></path>
									<path id="b54e3ab4d7044a9f288082bc6b864ae6" d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z" fill="currentColor"></path>
									<path id="67f94b4d1b83252a6619ed6e0cc0a3a1" d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17" fill="currentColor"></path>
								</g>
							</svg>
						</button>
						<button className="card-button visa active">
							<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 141.732 141.732">
								<g fill="currentColor">
									<path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z" />
								</g>
								<path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z" fill="currentColor" />
								<path fill="none" d="M0 0h141.732v141.732H0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className="payments">
					<div className="payment">
						<div className="card green">
						{/* <img src={data && data[1].image_url} /> */}
						</div>
						<div className="payment-details">
							<h3>Internet</h3>
							<div>
								<span>$ 2,110</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="payment">
						<div className="card olive">
						{/* <img src={data && data[2].image_url}/> */}
						</div>
						<div className="payment-details">
							<h3>Universal</h3>
							<div>
								<span>$ 5,621</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="payment">
						<div className="card gray">
							<span>03/22</span>
							<span>
								•••• 5214
							</span>
						</div>
						<div className="payment-details">
							<h3>Gold</h3>
							<div>
								<span>$ 3,473</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="faq">
					<p>Most frequently asked questions</p>
					<div>
						<label>Question</label>
						<input type="text" placeholder="Type here"/>
					</div>
				</div>
				<div className="payment-section-footer">
					<button className="save-button">
						Save
					</button>
					<button className="settings-button">
						<i className="ph-gear"></i>
						<span>More settings</span>
					</button>
				</div>
			</section>
		</div>
	</div>
</div>
        </div>
    )
}
export default Shop;
