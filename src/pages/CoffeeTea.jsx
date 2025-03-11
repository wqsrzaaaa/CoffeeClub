import React from 'react'
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const CoffeeTea = () => {

  const [FirstPara, setFirstPara] = useState(`We take pride in our diverse coffee selection, featuring intense espressos, frothy cappuccinos, silky lattes, refreshing iced coffees, flavorful mochas, and perfectly balanced pour-overs to suit every coffee lover's preference.
    Enjoy our signature blends, organic single-origin coffees, specialty cold brews, and expertly crafted espresso-based drinks, each made with premium beans and a passion for perfection.`
  );
   const [Secondpara, setSecondpara] = useState('We offer a diverse selection of teas, including soothing herbal infusions, refreshing green teas, bold black teas, aromatic chai blends, and calming chamomile, ensuring a perfect cup for every tea lover. Enjoy our premium loose-leaf teas, refreshing iced teas, and wellness blends, carefully crafted to deliver the perfect balance of taste and health benefits.')
    
   useEffect(() => {
   gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline()
  
    tl.fromTo("#my-first-para span" , 
      {color : "white"}, {color : "orange",stagger : .02 , scrollTrigger : 
        {  trigger : "#first-parent", start: "top top" ,
          end : "bottom center" , scrub : 2
       }}
    )
    tl.fromTo("#my-second-para span" , 
      {color : "white"}, {color : "orange",stagger : .02 , scrollTrigger : 
        {  trigger : "#first-parent", start: "top top" ,
          end : "bottom center" , scrub : 2
       }}
    )
  
     tl.fromTo("#img1" , 
      {x : "-250%"} , {x : 0 , scrollTrigger : {
        trigger : "#first-parent", start: "top top" ,
        end : "bottom center" , scrub : 2
      }}
     )
     tl.fromTo("#img2" , 
      {x: "200%"},{x : 0 , scrollTrigger : {
        trigger : "#first-parent" ,
        start : "top top" ,  end : "bottom center" , scrub : 2
      }}
     )
   }, [])



  return (
    <div id="first-parent"  className="w-full h-[450vh] shrink-0 flex flex-nowrap relative  top-0">
    <div   className="w-full h-screen text-white flex flex-wrap sticky top-0 overflow-hidden">
      <h1 className="absolute z-9 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl  md:text-5xl font-bold">
        Hot Coffee <br/> & <br/> Tea
      </h1>
      <div className="w-[500px] h-[400px] md:h-[700px] flex-col gap-4 flex  justify-center">
        <p id="my-first-para" className="w-[90%] text-[12px] md:text-[17px] !pl-9">{FirstPara.split(" ").map((e , i) => (
         <span key={i}>{e } </span>
        ))}</p>
        <img id="img1"  className="md:w-[400px] w-[200px] !ml-65 h-[150px] md:h-[300px] "
        src="https://dailydemitasse.com/wp-content/uploads/2023/03/espresso.jpg" alt="" />
      </div>
      <div className="w-[700px] h-[250px] !-mt-15 md:!mt-0  md:h-[650px] flex flex-col items-center justify-evenly">
        <img id="img2" className="md:w-[400px] md:h-[300px] w-[200px] h-[150px]"
         src="https://th.bing.com/th/id/R.9955722189d9c27a995fefb674478085?rik=ulTcOQRi1Y2TRg&riu=http%3a%2f%2fsidhgiriindia.com%2fdata%2fuploads%2ftea-1.jpg&ehk=hoel0W9Z8hfHFp422Ynz3kJolp3T%2bzq4W%2bJdqqPemqc%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <p id="my-second-para" className="md:w-[70%] w-[90%] md:text-[17px] text-[12px] !ml:9  md:!ml-45 ">{Secondpara.split(" ").map((e,i) => (
         <span key={i}>{e } </span>
        ))}</p>
      </div>
    </div>
  </div>
  )
}

export default CoffeeTea