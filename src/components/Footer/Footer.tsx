'use client'
import Link from 'next/link';
import facebook from "../../../public/Icons/001-facebook.svg"
import twitter from "../../../public/Icons/003-twitter.svg"
import instagram from "../../../public/Icons/004-instagram.svg"
import Image from 'next/image';
import axios from 'axios';
import toast ,{Toaster}from 'react-hot-toast';
import { useState } from 'react';

export default function Footer() {
  const [loading , setloading] = useState(false)
  const [Mail , setMail] = useState({
    mail:""
    })

  const subscibeEmail = async()=>{
    try {
      setloading(true)
      const response = await axios.post("/api/subscribe", Mail)
      toast.success('Successfully saved');
      console.log("Successfully added mail", response.data)


    } catch (error:any) {
      console.error("failed to save email! ",error);
    }
  }

  return (
    <>
    <div className='w-full overflow-hidden'>
    <Toaster/>
    <div className=''>
     <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-2xl text-gray-800 tracking-wide">NEXT INVEST</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Copyright © 2020. Logoplsum. All rights reserved.
            </p>
          </div>

          {/* Services Section */}
          <div className='text-sm'>
            <h2 className="font-bold text-lg text-gray-800">Services</h2>
            <ul className="mt-4 space-y-2 text-gray-600 cursor-pointer">
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          {/* About Section */}
          <div className='text-sm'>
            <h2 className="font-bold text-lg text-gray-800">About</h2>
            <ul className="mt-4 space-y-2 text-gray-600 cursor-pointer ">
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="font-bold text-lg text-gray-800">Subscribe to our newsletter</h2>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  value={Mail.mail}
                  onChange={(e)=> setMail({...Mail, mail:e.target.value })}
                  placeholder="Email address"
                  className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
                  />
                <button
                  onClick={subscibeEmail}
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-r-md"
                >
                  ➤
                </button>
              </div>
            </div>
            <div className="mt-10 flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 ">
            <Image src={facebook} alt={facebook}></Image>  
            </Link>

            <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image src={twitter} alt={twitter}></Image>
            </Link>
            
            <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image src={instagram} alt={instagram}></Image>
            </Link>
          </div>
        </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </footer>
    </div>
    </div>
    </>
  )
}