import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Second from "./pages/Second";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CoffeeTea from "./pages/CoffeeTea";
import Desert from "./pages/Desert";
import Fooditems from "./pages/Fooditems";
import Lenis from "@studio-freight/lenis";
import Contact from './pages/Contact'
const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth > 800) {
      gsap.fromTo(
        "#Parent-slide",
        { x: 0 },
        {
          x: "-100%",
          duration: 3,
          scrollTrigger: {
            trigger: "#Parent-slide",
            start: "top -250%",
            end: "bottom bottom",
            scrub: 3,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router basename="/CoffeeClub">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const MainContent = () => {
  const [Intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [count, setcount] = useState(0)

  useEffect(() => {
     let interval =   setInterval(() => {
        setcount((prev) => (prev < 100 ? prev + 1 : 100))
      }, 45);
      return ()=> clearInterval(interval)
  }, [])
  

  return (
    <>
      {Intro ? (
        <div className="w-full h-screen flex-col  bg-white fixed top-0 flex items-center justify-center">
          <iframe
            className="w-[280px] h-[280px]"
            src="https://lottie.host/embed/69fd9e0d-a737-4373-9230-72eda7be7a65/rhod8Tak2P.lottie"
          ></iframe>
          <div className="Intro-bg">{count}%</div>
        </div>
      ) : (
        <>
          <FirstPage />
          <Second />
          <div id="Parent-slide" className="w-full text-white flex h-[800vh]">
            <CoffeeTea />
            <Desert />
          </div>
          <Fooditems />
          <Footer />
        </>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="w-full h-[30vh] bg-black">
      <div className="w-full h-[15vh] md:h-[20vh] flex items-center justify-center">
        <h1 className="text-4xl footer-club">Club Coffee</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly text-white items-center">
        <p className="cursor-pointer">Our Menu</p>
          <p className="text-white">
            Contact
        </p>
        <p>Email: wqsrza07@gmail.com</p>
      </div>
    </footer>
  );
};

export default App;
