
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

export default Footer