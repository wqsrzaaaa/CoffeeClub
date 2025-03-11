import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Second = () => {
  return (
    <div className="w-full relative h-screen flex flex-col gap-9 items-center justify-center">
    <div id="bg-second"></div>
    <h1 id="trust-text" className="md:text-4xl text-2xl text-center text-amber-600 font-bold">
       Over the past year, we have earned people's trust.
    </h1>
    <div className="w-[80%] md:w-full h-[60vh]">
      <Swiper
        spaceBetween={40} 
        autoHeight={true} 
        breakpoints={{
          1024: { slidesPerView: 3, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: false },
          640: { slidesPerView: 1, centeredSlides: false },
        }}
        className="mySwiper !pt-4 w-full h-[200px] "
      >
        <SwiperSlide  id="Swiper-slide" className="rounded-2xl overflow-hidden relative">
          <div className="w-full h-[180px] flex items-center justify-center">
            <img className="w-[150px]  rounded-full h-[150px] overflow-hidden border-2 object-right object-cover border-amber-600" src="https://th.bing.com/th/id/OIP.3LRzOa-LUxxR2L9ejJIHqwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="w-full md:h-[200px] h-[200px] text-[16px] text-center review-text !pt-3 flex justify-center">
            <p className="w-[90%] !h-[100px] ">Club Coffee has a cozy ambiance with great coffee and fresh pastries. Whether for work or catching up with friends, it’s the ideal spot. The attention to detail in every cup is impressive!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="Swiper-slide" className="rounded-2xl overflow-hidden relative">
          <div className="w-full h-[180px] flex items-center justify-center">
            <img className="w-[150px] h-[150px]  rounded-full border-2 overflow-hidden border-amber-600" src="https://media.licdn.com/dms/image/C5603AQGqa-rSaxzcfQ/profile-displayphoto-shrink_800_800/0/1655235092525?e=2147483647&v=beta&t=MjY5ix8Xz_DAe2YdsUAkPm87Lnbt8i5FzPJn8dkubZ0" alt="" />
          </div>
          <div className="w-full h-[200px] text-[16px] text-center review-text  flex !pt-3  justify-center">
            <p className="w-[90%]">Club Coffee serves rich, perfectly brewed coffee with a welcoming atmosphere.
               The baristas are friendly and knowledgeable, making every visit enjoyable.
                A must-visit spot for coffee lovers!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="Swiper-slide" className="rounded-2xl overflow-hidden relative">
          <div className="w-full h-[180px] flex items-center justify-center">
            <img className="w-[150px] h-[150px] rounded-full  border-2 border-amber-600 overflow-hidden object-cover object-top" src="https://qph.cf2.quoracdn.net/main-qimg-fc546023069d45f50949ce7cdf745819" alt="" />
          </div>
          <div className="w-full h-[200px] text-[16px] text-center review-text  flex !pt-3 justify-center">
            <p className="w-[90%]">The espresso is bold, and the specialty drinks are creative and delicious. The service is fast, and the staff is always welcoming. Highly recommend trying their caramel macchiato!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="Swiper-slide" className="rounded-2xl overflow-hidden relative">
          <div className="w-full h-[180px] flex items-center justify-center">
            <img className="w-[150px] h-[150px]  rounded-full border-2 border-amber-600 overflow-hidden" src="https://profile-assets.showwcase.com/1629396915944.jpg" alt="" />
          </div>
          <div className="w-full h-[200px] text-[16px] text-center  flex !pt-3 review-text justify-center">
            <p className="w-[90%]">The quality of coffee here is unmatched, always fresh and flavorful. The staff is kind and passionate about coffee, ensuring the best experience. Perfect place for a quick coffee break or to relax.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Second