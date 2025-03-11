import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Fooditems = () => {

  useEffect(() => {

  gsap.registerPlugin(ScrollTrigger)

    if(window.innerWidth > 800){
      gsap.fromTo("#Food-parent" ,
        {x: "-100%"},
        {x : 0,duration : 3 , scrollTrigger : {
          trigger : ".main-food" ,
           start: "top bottom" , 
           end : "bottom center" ,
            scrub : true,
        }}
      )
    }
    if(window.innerWidth < 800){
      gsap.fromTo("#Food-parent" ,
        {x: 0},
        {x :0}
      )
    }

    let tl = gsap.timeline()

    tl.fromTo("#food-img1" , 
      {x : "-150%"} , {x : 0 , scrollTrigger : {
        trigger : ".main-food" , 
        start : "top bottom" ,
        end : "bottom top" ,
        scrub : true
      }}
    )

    if(window.innerWidth > 800){
      tl.fromTo("#food-img2" , 
        {y : "-150%"} , {y : 0 , scrollTrigger : {
          trigger : ".main-food" , 
          start : "top bottom" ,
          end : "bottom top" ,
          scrub : true
        }}
      )
    }
    if(window.innerWidth < 800){
      tl.fromTo("#food-img2" , 
        {scaleY : 0} , {scaleY : 2 , scrollTrigger : {
          trigger : ".main-food" , 
          start : "top top" ,
          end : "bottom center" ,
          scrub : true
        }}
      )
    }
    

   if(window.innerWidth > 800){
    tl.fromTo("#food-img3" , 
      {y : "150%"} , {y : 0 , scrollTrigger : {
        trigger : ".main-food" , 
        start : "top bottom" ,
        end : "bottom top" ,
        scrub : true
      }}
    )
   }
   if(window.innerWidth < 800){
    tl.fromTo("#food-img3" , 
      {x : "-100%"} , {x : '0%' , scrollTrigger : {
        trigger : ".main-food" , 
        start : "top bottom" ,
        end : "bottom top" ,
        scrub : true
      }}
    )
   }

    if(window.innerWidth < 800){
        tl.fromTo("#food-img4" , 
          {x : "100%"} , {x : '-50%' , scrollTrigger : {
            trigger : ".main-food" , 
            start : "top bottom" ,
            end : "bottom top" ,
            scrub : true
          }}
        )
    }
    if(window.innerWidth > 800){
      tl.fromTo("#food-img4" , 
        {x : "140%"} , {x : 0 , scrollTrigger : {
          trigger : ".main-food" , 
          start : "top bottom" ,
          end : "bottom top" ,
          scrub : true
        }}
      )
  }


  }, [])


  return (
    <div className="main-food w-full md:!mt-0 !mb-9 overflow-x-hidden md:overflow-x-visible h-[250vh]  md:h-[500vh]">
         <div id="Food-parent" className="w-full  flex flex-wrap md:sticky relative top-0 h-screen ">
          <p className="absolute food-item text-5xl font-bold  text-center top-[70%]  md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            Club Coffee <br/> Food Items
          </p>

          <div id="parent-div2" className="w-[500px] text-white !mt-25 md:!mt-0 flex flex-col justify-center gap-9 items-end h-[300px] md:h-[400px]">
            <img id="food-img1" className="md:w-[30vh]  w-[40vh]  h-[23vh] !-mr-25 !mt-9" 
            src="https://th.bing.com/th/id/R.7b1cbbaae3d04d1fd3bc4ad64bf1d52d?rik=siJ6c8ufpVtJVw&pid=ImgRaw&r=0" alt="" />
            <p className="md:w-[80%] w-[90%] text-[12px] md:text-[17px] text-center"><span className="font-bold text-amber-600">Club Sandwich</span> - A Classic with a Twist! 🥪
            Layered with juicy grilled chicken, crispy beef bacon, fresh veggies, and creamy mayo between perfectly toasted bread. Served with golden fries and a flavorful dip for the ultimate bite!</p>
          </div>

         <div className="w-[600px] !mt-90 md:!mt-0  !pt-9 gap-7 text-white !ml-0  md:!ml-60 h-[200px]  md:h-[400px] flex flex-col-reverse md:flex-col items-center justify-center">
          <p className=" w-[90%] text-center md:text-[17px] text-[12px]"><span className="text-amber-600">Chocolate Croissant</span> - A Sweet Indulgence! 🍫🥐
          Flaky, buttery pastry filled with rich, melted chocolate in every bite. Baked to golden perfection for a crisp, airy texture. Perfect with coffee or as a sweet treat anytime!</p>
          <img id="food-img2"
           className="md:w-[150px]  md:h-[200px] w-[100px] md:!-ml-70" 
          src="https://th.bing.com/th/id/R.25931879c525d3de632c5194feea84ef?rik=7Kf2FCONqnldng&pid=ImgRaw&r=0" alt="" />
         </div>

         <div className="w-[600px] !mt-20 md:!mt-0 flex items-center md:flex-row flex-col-reverse text-white !p-5">
          <p className="md:!ml-9 !mt-9 md:!mt-0  md:w-[80%] w-[100%] h-0  md:text-[17px] text-[12px] text-center"><span className="text-amber-600">Chocolate Waffles</span> - A Choco Lover's Dream! 🧇
          Crispy, golden waffles infused with rich chocolate, topped with melted chocolate drizzle and a sprinkle of cocoa magic. Perfect for a sweet, indulgent treat!</p>
           <img id="food-img3" className="md:w-[300px] !-mr-25 md:!ml-9 !ml-0  md:h-[200px] w-[190px] h-[130px] "
            src="https://th.bing.com/th/id/OIP.0jiZf2SpJMPo_t8N-GkOsQHaJQ?rs=1&pid=ImgDetMain" alt="" />
         </div>
         <div className="w-[500px] !mt-80 md:!mt-0 !ml-10 md:!ml-35 gap-8 text-white items-end  flex flex-col"> 
          <img id="food-img4" className="w-[300px] h-[200px] !-mt-45 !-mr-25 " 
          src="https://falasteenifoodie.com/wp-content/uploads/2022/11/Authentic-Middle-Eastern-Chicken-Shawarma.jpg" alt="" />
           <p className="md:w-[90%] !mr-9 md:!mr-0 text-center  "><span className="text-amber-600">Shawarma Roll</span> - Bold Flavors in Every Bite! 🌯
           Juicy, spiced chicken or beef wrapped in soft pita bread, loaded with fresh veggies and creamy garlic sauce. Grilled to perfection for the ultimate street-food experience!</p>
         </div>

         </div>
      </div>
  )
}

export default Fooditems