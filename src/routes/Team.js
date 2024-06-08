import React from 'react'
import "./team.css"
import {FaLinkedinIn} from "react-icons/fa"

function Team() {
  const council = [
    {
      name:"Adityavignesh",
      designation:"President",
      link:"https://www.linkedin.com/in/adi4502/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Faditya.png?alt=media&token=bee4b550-9aa9-4175-ab63-938b8aa1523f"
    },
    {
      name:"Hakash MP",
      designation:"Vice President",
      link:"https://www.linkedin.com/in/hakash-mp-813129218/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FHakash.jpg?alt=media&token=f02e7e02-648b-49d8-a82d-2ddc4801d21d"
    },
    {
      name:"Janani",
      designation:"General Secretary",
      link:"https://www.linkedin.com/in/janani-v-7429a720b/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FJanani.jpg?alt=media&token=0bffd21c-3e9e-4e62-8484-418b33c782fa"
    },
    {
      name:"Lakshmi Sruthi",
      designation:"Secretary",
      link:"https://www.linkedin.com/in/lakshmi-sruthi-k",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fsruthi.jpg?alt=media&token=d435ea64-e56e-4076-b4c4-c3126495e1e1"
    },
    {
      name:"Diviyamsh",
      designation:"Joint Secretary",
      link:"https://www.linkedin.com/in/divyamsh-b-6a3a97222/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDivyamsh.jpg?alt=media&token=5dc50879-248b-4626-adb4-18f878423967"
    },
    {
      name:"Aniruth Vel A P ",
      designation:"Management Lead",
      link:"https://www.linkedin.com/in/aniruth-vel-anand-915533149/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FAniruth.jpg?alt=media&token=875a35ed-69f6-4199-ad90-b332de8f37ac"
    },
    {
      name:"Srihari V",
      designation:"Design Lead",
      link:"https://www.linkedin.com/in/srihari-venkateswaran-32b89b1b5/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSrihari.jpeg?alt=media&token=feb9dded-2661-4d07-9952-4d80229cf374"
    },
    {
      name:"Aathan A",
      designation:"Content Lead",
      link:"https://www.linkedin.com/in/aathan-a-b70565246",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FAATHAN.jpeg?alt=media&token=56948beb-46bd-46d9-bb7c-2a1fa01badc3"
    },
    {
      name:"Meenakshi R",
      designation:"Treasurer",
      link:"https://www.linkedin.com/in/meenakshi-r-65a384200/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fmeenakshi.jpg?alt=media&token=79f574a9-5dae-4df2-90b3-e8b8d5a25b82"
    },
    {
      name:"Akshaya Murali",
      designation:"Treasurer",
      link:"https://www.linkedin.com/in/akshaya-murali-5b86a0258",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fakshaya.jpg?alt=media&token=3c15fe24-1eaf-4818-b30e-2a7fb20cde1d"
    }
  ]
  const executive = [
    {
      name:"Danush S",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/danush-s-cs-64987b244",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FS-danush.jpg?alt=media&token=cafab71e-8a80-422b-bfb9-95d1eae8343d"
    },
    {
      name:"Nandha Kumar S",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/nandha-kumar-s-9709a423a/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FNANDHA%20KUMAR.jpg?alt=media&token=a1039141-f2fa-4da3-8ddc-2d0edf3eebf7"
    },
    {
      name:"Iyyappan R",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/iyyappan-surya-3a7b9922b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FIYYAPPAN.jpg?alt=media&token=b89e6b0b-7cfe-4bba-8e26-7f8f0a63cc55"
    },
    {
      name:"Sanjay Karthik M",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/sanjay-karthick-m-a55195221",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSANJAY%20KARTHICK.jpg?alt=media&token=63916c0b-ceb6-4a0e-a163-864df9075804"
    },
    {
      name:"Pratheek",
      designation:"Executive Member",
      link:"https://www.linkedin.com/in/pratheek-manimaran-5b7a2a22b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FPratheek.jpg?alt=media&token=f2c7a5e2-aeca-4f15-a0c0-da4e1d1cd392"
    },
  ]
  const coexecutive = [
    {
      name:"Rahul G",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/rahul-g-9ba993224",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FRahul.jpg?alt=media&token=4ae251d0-100b-4ed7-b6fc-cf2531ba6aca"
    },
    {
      name:"Dharani Narumugai R",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/dharani-narumugai-ramprasath-655b8120b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDharani%20narumugai.jpeg?alt=media&token=2a89a310-d05d-4963-8d7d-b075c44f76bf"
    },
    {
      name:"Sakthimurugan M ",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/sakthimurugan-m-755a9624a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSakthimurugan.jpg?alt=media&token=9ea0c508-08fb-4211-93f1-73e0fc70f44c"
    },
    {
      name:"Narmadha P",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/narmadha-prakash-b4139423a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FNARMADHA.png?alt=media&token=5ad116b4-a010-4b65-aadc-eee97e00f474"
    },
    {
      name:"Sivarajan R",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/sivarajan-r-49209496/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSivarajan.jpg?alt=media&token=67d858e4-c8c6-4566-b732-c0ab2e79cfd0"
    },
    {
      name:"Santhosh Kumar S",
      designation:"Co Executive Member",
      link:"https://www.linkedin.com/in/santhoshkumar1910",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSANTHOSH%20KUMAR.jpg?alt=media&token=4b1b9952-e95a-4fc7-83b1-386419641378"
    },
  ]
  const content = [
    {
      name:"Dharani R",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/dharani-r-785a2a23a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDHARANI%20R.jpg?alt=media&token=71cbcb90-41c7-4cdc-a7f2-958a2c272c3e"
    },
    {
      name:"Mounika R",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/mounika-rajamanickam-a2504a239",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FMounika.jpg?alt=media&token=676d1ed2-2b43-40e3-b1dd-d40a8014e8f9"
    },
    {
      name:"Dorraju Nikhita",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/nikhita-dorraju-b135b7210",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FDORRAJU%20NIKHITA.jpg?alt=media&token=be110545-e7e7-444d-bcfc-1c4fcdc66524"
    },
    {
      name:"Himanshu Pant",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/himanshu-pant-3084581bb",
      img:"https://media.licdn.com/dms/image/C5603AQFkOfex4S5Wdg/profile-displayphoto-shrink_400_400/0/1642435822874?e=1681948800&v=beta&t=hvBKaRmUgLgcnLr_8HXf1Z_tFdVUlMDK7YZMZGnYo-I"
    },
    {
      name:"Sai Manushrri S",
      designation:"Content Team",
      link:"https://www.linkedin.com/in/sai-manushrri-067960256",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSAI%20MANUSHRRI.jpeg?alt=media&token=9d3cd4eb-d533-48d8-ac5d-dc9f8343356d"
    },
  ]
  const webteam = [
    {
      name:"John Williams",
      designation:"Web Master",
      link:"https://www.linkedin.com/in/john-williams-m/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FJOHN%20WILLIAMS.jpg?alt=media&token=5401878f-7b84-49a1-9ef8-5ec46a2e0e69"
    },
    {
      name:"Yerragogu Rishitha",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/yerragogu-rishitha-5519a724a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FRISHITHA.jpg?alt=media&token=8061de8e-bed0-4f3c-87b1-a5d0968f3399"
    },
    {
      name:"Sunandita R",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/sunandita-r-2b0a9424a",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSUNANDITA.JPG?alt=media&token=d6c5f479-b2c4-485b-9046-0c9384d7b275"
    },
    {
      name:"Mythreye S",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/mythreye-s-9862b2239",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FMythreye.jpg?alt=media&token=48c371cc-ecef-44c9-87e3-2207d30bc098"
    },
   {
      name:"Srii Rajeswari P",
      designation:"Web Team",
      link:"https://www.linkedin.com/in/srii-rajeswari-p/",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSRII%20RAJESWARI.jpeg?alt=media&token=d2e9583f-f57f-4416-a03e-8bdf0ac90d49"
    },
  ]
  const design = [
    {
      name:"Vinochan K B",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/vinochankb",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fvinochan.jpg?alt=media&token=48457992-0406-413e-9a8f-7e01e549ab09"
    },
    {
      name:"Shivasubbiah",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shiva-subbiah-91a253231",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FSHIVASUBBIAH.jpg?alt=media&token=5af1ab4d-bd1c-4918-869e-298da71d0d99"
    },
    {
      name:"Shafiya Parveen S",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shafiya-parveen-914765229",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fshafiya.jpg?alt=media&token=3f32e43a-2ee9-49ff-a22f-bd9026123561"
    },
    {
      name:"Shravan Venketraman",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/shravan-venketraman-a2218a266",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FShravan.jpeg?alt=media&token=aae7f7e2-03b8-4732-81b1-1fe7180e30f5"
    },
    {
      name:"Bhavan Arimaan T",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/bhavan-arimaan-6391a7253",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FBhavan.jpg?alt=media&token=c6129967-be96-46f9-a4ec-8fc3b725943f"
    },
    {
      name:"Sanjay Raj",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/sanjay-raj-a4b20a24b",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2Fsanjayraj.jpg?alt=media&token=9b4671f8-80f7-4806-910f-657dbbd443a3"
    },
    {
      name:"Chanakiya Kshatriya A",
      designation:"Design Team",
      link:"https://www.linkedin.com/in/chanakiya-kshatriya-476035267",
      img:"https://firebasestorage.googleapis.com/v0/b/c2c-club.appspot.com/o/members%2FCHANAKIYA.JPG?alt=media&token=3540e0b8-8415-45a4-b897-1f5a2e0d9d2e"
    },
  ]
  return (
    <div className='team'> 
      <br />
      <h2>Core Members</h2>
      <div className="core">
        {council.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Executive Members</h2>
      <div className="core">
        {executive.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Co-Executive Members</h2>
      <div className="core">
        {coexecutive.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Content team Members</h2>
      <div className="core">
        {content.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Web Team</h2>
      <div className="core">
        {webteam.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
      <hr />
      <br />
      <h2>Design team Member</h2>
      <div className="core">
        {design.map((ppl,index)=>{
          return <div className="member" key={index}>
            <div className="image_member">
              <img src={ppl.img} alt={ppl.name} />
              <div className="img_overlay">
                <FaLinkedinIn size={40} onClick={()=>{window.open(ppl.link,"blank")}}/>
              </div>
            </div>
            <h6>{ppl.name}</h6>
            <p>{ppl.designation}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Team