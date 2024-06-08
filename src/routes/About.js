import React from 'react'
import "./about.css"
import members from "../assets/gallery/gal1.jpg"
import pic1 from "../assets/vinothiyalakshmi_p.png"
import pic2 from "../assets/selvamani_p.png"
import { FiExternalLink } from "react-icons/fi"

function About() {
  const f = [
    {
      name:"Dr. P. Vinothiyalakshmi",
      image:pic1,
      link:"https://www.svce.ac.in/profile-info/?id=5103"
    },
    {
      name:"Mr. P. Selvamani",
      image:pic2,
      link:"https://www.svce.ac.in/profile-info/?id=5165"
    }
  ]
  return (
    <div className='aboutPage'>
      <div className="history">
        <h1>About Compete to Compute</h1>
        <p>The C2C Club is a student-run organization at Sri Venketeswara College of Engineering. Our mission is to foster a love for computer science and technology. We aim to provide a supportive and collaborative environment for students of all backgrounds and skill levels. We hold monthly meetings where we discuss a variety of topics related to computer science & existing technologies. These include programming languages, software development, hardware, artificial intelligence, and more. We also host a number of events throughout the year, such as hackathons, workshops, and guest speaker events. Whether you’re a seasoned programmer or just getting started, we welcome you to join us!</p>
      </div>
      <div className="coordinators">
        <h2>Our Co-ordinators</h2>
        <div className="faculties">
          {f.map((faculty,index)=>{
            const {name,image,link} = faculty
            return <div className="faculty" key={index}>
              <img src={image} alt={name} />
              <div className="nandlink">
                <h6>{name}</h6>
                <center><FiExternalLink onClick={()=>{window.open(link,"blank")}} style={{cursor:"pointer"}}/></center>
              </div>
            </div>
          })}
        </div>
      </div>
      <img src={members} alt="members"/>
    </div>
  )
}

export default About