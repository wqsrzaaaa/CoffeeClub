import React, { useEffect } from 'react'
import gsap from "gsap";

const FirstPage = () => {

  useEffect(() => {
    gsap.fromTo("#right-mountains img" , 
      { y : "150%" },{y : '0' , duration :3 , stagger : 1 , delay : 2}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#left-mountains img" , 
      { y : "150%" },{y : '0' , duration :2 , stagger : 1 , delay : 2}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#clouds-left img" , 
      { x : "-150%" },{x : '0' , duration :2 , stagger : 1 , delay : 6}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#clouds-right img" , 
      { x : "150%" },{x : '0' , duration :2 , stagger : 1 , delay : 6}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#citys-left img" , 
      { x : "-150%" },{x : '0' , duration :4 , stagger : 1 , delay :7}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#citys-right img" , 
      { x : "150%" },{x : '0' , duration :4 , stagger : 1 , delay :7}
    )
  }, [])
  useEffect(() => {
    gsap.fromTo("#tea-pot img" , 
      { y : "150%" },{y : '0' , duration :4 , delay :10}
    )
  }, [])
  


  return (
    <div className='w-full h-[90vh]  md:h-screen background relative overflow-hidden'>
      
    <div className='md:w-[200px] w-[130px]  gap-3 md:text-2xl text-[17px] leading-[4vh] font-bold justify-center text-zinc-600 h-[100px] flex items-center absolute top-0 left-0'>
    <iframe className='md:h-[50px] md:w-[50px] w-[30px] ' src="https://lottie.host/embed/f16451fd-cd67-4c71-a8d6-062b9d13230c/0qFHf767Db.lottie"></iframe>
     <h3>Coffee <br /> Club</h3>
    </div>
    
    <div className='md:w-[300px] md:h-[300px] w-[150px] h-[150px] sun rounded-full absolute top-1/2 left-1/2 -translate-x-1/2'></div>
    <div id='right-mountains' className='relative w-full h-full'>
        <img className='md:w-[900px] w-[400px]   absolute z-9 -bottom-9 -left-90'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-left.svg" alt="" />
        <img className='md:w-[700px] w-[500px] absolute z-4 -bottom-9 -left-16'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-left.svg" alt="" />
        <img className='md:w-[500px] w-[300px] absolute z-2 -bottom-9 left-60'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-left.svg" alt="" />
        <img className='md:w-[300px] w-[300px]  absolute bottom-16 md:-bottom-9 left-10 md:left-90'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-left.svg" alt="" />
        <img className='md:w-[300px] w-[300px] absolute bottom-15 md:-bottom-9 left-50 md:left-120'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-left.svg" alt="" />
    </div>
    
    <div id="clouds-left" className='w-full h-full'>
      <img className='md:w-[500px] md:h-[100px] w-[250px]  absolute top-[60%] -left-[10%]  md:top-[60%] md:left-[30vh] z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-2-left.svg" alt="" />
      <img className='w-[500px] h-[100px] absolute top-[40%] -left-[20%]  md:top-[45%] md:left-[20vh] z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-2-left.svg" alt="" />
      <img className='w-[500px] h-[100px] absolute top-[23%] hidden md:block -left-9 z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-2-left.svg" alt="" />
    </div>
    <div id="clouds-right" className='w-full h-full'>
      <img id='clouds-right' className='w-[700px] h-[100px] absolute top-[52%] -right-[40%]  md:top-[65%] md:right-[20vh] z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-1-right.svg" alt="" />
      <img id='clouds-right' className='w-[600px] h-[150px] absolute top-[30%] -right-[40%]  md:top-[45%] md:right-[15vh] z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-1-right.svg" alt="" />
      <img  id='clouds-right' className='w-[500px] h-[200px] absolute hidden md:block top-[18%] -right-9 z-2'
      src="https://dteac.com/img/elements/scene/scene-2/cloud-1-right.svg" alt="" />
    </div>
    
    
    <div id='left-mountains' className='w-full h-full'>
        <img className='w-[900px] absolute z-4 -right-90 -bottom-9 md:-bottom-9'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-right.svg" alt="" />
        <img className='w-[700px] absolute z-2 -right-16 -bottom-9 md:-bottom-9'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-right.svg" alt="" />
        <img className='w-[500px] absolute right-60 -bottom-9 md:-bottom-9'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-right.svg" alt="" />
        <img className='w-[300px] absolute right-110 -bottom-9 md:-bottom-9'
        src="https://dteac.com/img/elements/scene/scene-1/mountain-5-right.svg" alt="" />
        
    </div>
    

    <div id="citys-left" className='w-full h-full '>
      <img className='md:w-[900px] md:h-[95vh] w-[400px] h-[50vh] absolute -left-35 -bottom-18 z-9 md:-left-35 md:-bottom-25 '
      src="https://dteac.com/img/elements/scene/scene-3/city-1-left.svg" alt="" />
       <img className='md:w-[900px] md:h-[90vh] w-[500px] h-[70vh] absolute z-8 -left-[30%]  md:-left-0 -bottom-25 '
      src="https://dteac.com/img/elements/scene/scene-3/city-2-left.svg" alt="" />
      <img className='w-[700px] h-[80vh] absolute z-7 -left-[25%]  md:left-60 -bottom-25'
        src="https://dteac.com/img/elements/scene/scene-3/city-3-left.svg" alt="" />
    </div>
   <div id="citys-right">
    <img className='md:w-[900px]  md:h-[95vh] w-[400px] h-[40vh] absolute z-9 -bottom-3 -right-45  md:-right-55 md:-bottom-25 '
      src="https://dteac.com/img/elements/scene/scene-3/city-1-right.svg" alt="" />
     <img className='md:w-[900px] md:h-[90vh] w-[400px] h-[70vh] absolute z-8 -right-48  md:-right-20 -bottom-25'
       src="https://dteac.com/img/elements/scene/scene-3/city-2-right.svg" alt="" />
   <img className='md:w-[700px] md:h-[80vh] w-[500px] h-[70vh] absolute z-7 -right-45 md:right-25 -bottom-25'
        src="https://dteac.com/img/elements/scene/scene-3/city-4-right.svg" alt="" /> 
    </div> 

     <div id="tea-pot">
      <img className='w-full h-[500px] absolute -bottom-53 md:-bottom-35 left-0 z-99'
      src="https://dteac.com/img/elements/scene/scene-4/tea.svg" alt="" />
    </div> 


  </div>
  )
}

export default FirstPage