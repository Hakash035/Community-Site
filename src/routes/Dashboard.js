import React from 'react'
import { Link } from 'react-router-dom'
import "../app.css"
import Particle from './Particle'

function Dashboard() {
  return (
    <div>
      <Particle/>
        <div className="hero">
          <div>
            <h1 className='hero-h1'>Compete to Compute Club</h1>
            <p className='hero-p'>One of the Leading Technical Club of SVCE <br/> Join us to be a part of our Family</p>
            <button className='hero-btn'><Link to="/dashboard" style={{color:"inherit",textDecoration:"none"}}>Explore</Link></button>
          </div>
        {/* <img className="heroimg" src={heroimg} alt="Hero"></img> */}
      </div>
    </div>
  )
}

export default Dashboard