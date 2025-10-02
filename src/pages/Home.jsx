import React from 'react'
import DarkVeil from '../ui/DarkVeil';
import TextType from '../ui/Texttype';
import logo from "../assets/images/logp.png"; 
import CircularText from "../ui/CircularText"


const Home = () => {
  return (
<div className="w-screen h-screen relative overflow-hidden">
  {/* Background Canvas */}
  <DarkVeil className="absolute top-0 left-0 w-full h-full z-0" />

  {/* Overlay / Content */}
  <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-center">
<div className="upper w-full  flex justify-center items-center text-center px-2 pt-30 ">
  <div className="text-center">
    <TextType 
      text={["WEBREAL.", "for your website.", "GROW-WITH-US."]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      className="text-3xl font-neue-light text-black"
    />
  </div>
</div>
<div className="mid w-full h-[300px] flex flex-col justify-center items-center text-center text-white">
  {/* Wrapper for logo + text */}
  <div className="flex flex-col md:flex-row justify-center items-center">
    {/* Logo */}
    <div>
      <img src={logo} alt="logo" className="h-[270px] md:h-[250px]" />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center items-center text-center ">
      <h1 className="text-3xl md:text-4xl font-bold">WE BUILD.</h1>
      <h1 className="text-3xl md:text-4xl font-bold">YOU GROW.</h1>
    </div>
  </div>
</div>

<div className="low w-full flex justify-center items-center gap-6 pb-6 ">
  {/* Left - Circular Text (hidden on mobile) */}
  <div className=" mr-[50px] hidden md:block">
    <CircularText 
      text="WEBREAL*WITH*YOU*FLY*"
      onHover="speedUp"
      spinDuration={20}
      size={120}
    />
  </div>

  {/* Center - Button */}
<button
  className="font-neue-light mt-6 md:mt-0 py-3 px-6 bg-[#7446e0] rounded-lg text-white font-semibold hover:bg-[#000] hover:text-[#7446e0] border border-[#7446e0] transition"
  onClick={() => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Let’s Build Together
</button>


</div>

  </div>
</div>

  )
}

export default Home