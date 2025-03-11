import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Desert = () => {

  const [seonddivPara, setseonddivPara] = useState('We offer a delicious variety of frappes, including classic coffee frappes, rich chocolate frappes, creamy caramel frappes, refreshing vanilla frappes, and indulgent mocha frappes, all blended to perfection. From smooth hazelnut and white chocolate frappes to fruity strawberry and matcha green tea frappes, our icy beverages provide the perfect balance of flavor and refreshment.')
  const [Deserts, setDeserts] = useState('We offer a delightful range of desserts, including rich chocolate cakes, creamy cheesecakes, buttery croissants, and indulgent brownies, perfect for satisfying your sweet cravings. From classic tiramisu and warm apple pies to delicate macarons and flaky pastries, our desserts pair perfectly with your favorite coffee or tea.')


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
     let tl = gsap.timeline()
   
     tl.fromTo("#Second-first-para span" , 
       {color : "white"}, {color : "orange",stagger : .02 , scrollTrigger : 
         {  trigger : "#second-page", start: "top top" ,
           end : "bottom center" , scrub : 2
        }}
     )
     tl.fromTo("#Deserts span" , 
       {color : "white"}, {color : "orange",stagger : .02 , scrollTrigger : 
         {  trigger : "#second-page", start: "top top" ,
           end : "bottom center" , scrub : 2
        }}
     )
   
      tl.fromTo("#second-img1" , 
       {opacity : 0} , {opacity : 1 , scrollTrigger : {
         trigger : "#second-page", start: "top top" ,
         end : "bottom center" , scrub : 2
       }}
      )
      tl.fromTo("#deserts-img" , 
       {opacity : 0 },{opacity : 1 , scrollTrigger : {
         trigger : "#second-page" ,
         start : "top top" ,  end : "bottom center" , scrub : 2
       }}
      )
    }, [])



  return (
    <div  id="second-page" className="w-full h-[360vh] shrink-0 absolute left-0 md:left-[100%] top-[650vh] md:top-[400vh]">
           <div className="w-full h-screen flex flex-wrap sticky top-0 ">
            <div className="w-[500px] h-[350px] md:w-[700px]  md:h-[700px] flex flex-col items-center justify-evenly">
              <p id="Second-first-para" className="w-[80%] md:text-[17px] text-[12px]" >{seonddivPara.split(" ").map((e , i)=>(
                <span key={i}>{e } </span>
              ))}</p>
              <img id="second-img1" className="md:w-[500px] md:h-[300px] w-[250px] md:!ml-60 !ml-20"
               src="https://images.aws.nestle.recipes/original/81e5f1b34a3e0dc78cb793ba62b07377_creamy_chocolate_frappe.jpg" alt="" />
            </div>
             <h1 className="text-5xl z-3  font-bold text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Frappe's <br/> & <br/> Deserts
             </h1>
             <div className="w-[500px] md:h-[700px] md:w-[700px] h-[300px]  justify-evenly flex flex-col items-center">
               <img  id="deserts-img" className="md:w-[500px] md:h-[250px] w-[250px] md:!-mr-20 !mr-20" 
               src="https://cdn.pixabay.com/photo/2016/11/29/07/45/desserts-1868181_1280.jpg" alt="" />
               <p id="Deserts" className="md:w-[80%] w-[90%] text-center md:text-[17px] text-[12px]">{Deserts.split(" ").map((e , i)=>(
                <span key={i}>{e } </span>
               ))}</p>
             </div>
           </div>
         </div>
  )
}

export default Desert