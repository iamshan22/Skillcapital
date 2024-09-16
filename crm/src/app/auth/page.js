"use client"
import next from "react";
import Image from "next/image";

export default function Home() {
  return (
<div className="main flex h-screen">
  <div className="container w-1/2 h-full flex flex-col justify-center items-center">
    <div className="row mb-6">
      <Image  id="imo" src="https://crm.skillcapital.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=1920&q=75" alt="Skill Capital" />
    </div>
    <div className="s1 bg-white p-6 shadow-md rounded-lg">
      <div className="E1 mb-4">
        <label htmlFor="Username" className="block mb-2">Username</label>
        <input type="text" id="Username" className="border border-gray-300 rounded-md w-full p-2"/>
      </div>
      <div className="E1 mb-4">
        <label htmlFor="password" className="block mb-2">Password</label>
        <input type="password" id="password" className="border border-gray-300 rounded-md w-full p-2"/>
      </div>
      <button id="Login" className="bg-gradient-to-r from-crimson to-orange-400 text-white p-2 w-full rounded-md hover:scale-105 transition-transform duration-300">LOGIN</button>
      <div className="reme mt-4">
        <input type="checkbox" id="rme" className="mr-2"/>
        <label>Remember me</label>
      </div>
      <p className="mt-8 text-center">©2024, All Rights Reserved</p>
    </div>
  </div>
  <div className="container2 w-1/2 h-full flex justify-center items-center">
    <Image id="imo1" src="https://crm.skillcapital.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75" alt="Skill Capital Login Page" className="w-full h-full object-cover"/>
  </div>
</div>

  );
}
