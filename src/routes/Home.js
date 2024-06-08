import React, { useMemo } from 'react'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import slide from "../assets/slideimg.jpg"
import hack from "../assets/hack.jpg"
import mag from "../assets/mag.jpg"
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore/lite'
import db from '../firebase'
import { BallTriangle } from 'react-loader-spinner';
import symp from "../assets/symp.jpg"

function Home() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2Fgal1.jpg?alt=media&token=d0bec970-e8a0-48dd-8930-713e1b561a40",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2Fgal2.jpg?alt=media&token=fadedb33-10f9-4127-831a-637147934d18",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2Fgal3.jpg?alt=media&token=f8dc2484-efa4-406c-bb99-30bfd1c33012",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116142715_IMG_3473.JPG?alt=media&token=1e4756ba-701c-4bda-b2a4-053c675a6f05",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116142756_IMG_3475.JPG?alt=media&token=4de41d72-d44f-4ceb-9760-94f290436d89",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116143022_IMG_3476.JPG?alt=media&token=9667caf5-b2f3-4f91-ba3d-42cf3b4a7245",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116143432_IMG_3485.JPG?alt=media&token=7cb5ed35-5ae5-4c26-a08f-a712782f5a3e",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151113_IMG_3540.JPG?alt=media&token=7b56a7f2-d37a-47e4-bc7f-87b089b6fea1",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151134_IMG_3542.JPG?alt=media&token=67114364-bffc-4936-a8c5-a61e146798b3",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151327_IMG_3553.JPG?alt=media&token=2934a0a5-9882-47a7-9eee-2d62c7958068",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151445_IMG_3557.JPG?alt=media&token=40ad7315-f543-4ca0-b774-c1346d7b553c",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151008_IMG_3533.JPG?alt=media&token=d242cf2b-4016-4aaa-b401-c9484c61ad66",
    "https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/gallery%2F20221116151109_IMG_3538.JPG?alt=media&token=6327e96e-2e63-4927-b2f2-3ad03aefc68f",

  ]
  // const slideStyle = {
  //   backgroundImage:`url(${slide1})`,
  //   backgroundSize:'cover',
  //   width:'100%',
  //   height:'inherit',
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center"
  // }
  const data = useMemo(()=>{
    return [
    {
      img:hack,
      text:"",
      isclick:false,
      link:""
    },
    {
      img:mag,
      text:"",
      isclick:true,
      link:"#"
    },
    {
      img:symp,
      text:"",
      isclick:false,
      link:""
    }
  ]},[])
  const [loading, setLoading] = useState(true)
  const [index,setIndex] = useState(0)
  const [blogs,setBlogs] = useState([])
  const getData = async() => {
    let collRef = query(collection(db,"Blogs"),orderBy("timestamp","desc"),limit(4))
    let res = await getDocs(collRef)
    res.forEach((doc)=>{
      setBlogs(prev => {
        return [doc.data(), ...prev]
      })
    })
    // setBlogs((prev)=>{
    //   return prev.slice(4)
    // })
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
    let slide = setInterval(()=>{
      setIndex(index+1)
    },4000)
    return ()=>{clearInterval(slide)}
  },[index])

  useEffect(()=>{
    let lastIndex = data.length -  1
    if(index > lastIndex){
      setIndex(0)
    }
    if(index < 0){
      setIndex(lastIndex)
    }
  },[index,data])

  return (
    <div>
      {/* <div>
        <img src={gif} alt="gif" height="650px"  width="1260px"/>
      </div> */}
      <div className="slider">
        <button onClick={()=>{setIndex(index - 1)}} className="sliderBtn"><FiChevronLeft size={40}/></button>
        {data.map((da,ind)=>{
          let pos = "nextSlide"
          const {img,text,isclick,link} = da
          if(ind === index){
            pos = "activeSlide"
          }
          if(ind === index - 1 || (index === 0 && ind === data.length - 1)){
            pos = "prevSlide"
          }
          return <div className={`slide ${pos}`} key={ind}>
            {/* <img src={img} alt="slide" width="100%"/> */}
            <div className='slide-img-div' onClick={()=>{
              if(isclick){
                window.open(link,"blank")
              }
            }} 
            style={{
                backgroundImage:`url(${img})`,
                backgroundSize:'cover',
                width:'100%',
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
            }}>{text}</div>
          </div>
        })}
        < button onClick={()=>{setIndex(index + 1)}} className="sliderBtn"><FiChevronRight size={40}/></button>
      </div>
      <div className="blogs">
        <h1>BLOGS</h1>
        <div className="blogs-cont">
          {!loading ? blogs.map((blog,index)=>{
            const {timestamp,title,poster,overview} = blog
            return <Link style={{textDecoration:"none",color:"black"}} className="blog" key={index} to={`/blog/${title}`}>
              <div className="inner-img">
                <img src={`${poster}`} alt="blog" />
                <div className="inner-overview">
                  <div className="head-time">
                    <h2>{title}</h2>
                    <p>{timestamp.toDate().toDateString().slice(4)}</p>
                  </div>
                  <p>{overview}</p>
                </div>
              </div>
            </Link>
          }):<div style={{margin:"15px auto",width:"fit-content"}}><BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
      /></div>}
        </div>
        <button><Link className='link' style={{color:"black"}} to="/blogs">View All</Link></button>
      </div>
      <div className="gallery">
          <h1>Gallery</h1>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}>
                <Masonry gutter='5px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Home