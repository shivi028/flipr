"use client"
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Signup(e:any) {
  const router = useRouter();
  const [user , setUser] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [buttonDisabled , setButtonDisabled] = useState(false)
  const [loading , setloading] = useState(false)

  const onSignup = async()=>{
    try {
      setloading(true)
      console.log("in onSignup function 1")
      const response = await axios.post("/api/sign-up",user)
      
      console.log("in onSignup function 2")
      console.log("signup success", response.data)
      
      router.push("/login");

    } catch (error:any) {
      console.error("Signup failed ",error);
      
    }
  }

  useEffect(()=>{
  if(user.email.length > 0 && user.password.length >0 && user.username.length > 0){
    setButtonDisabled(false)
  }
  else{
    setButtonDisabled(true)
  }
  },[user])
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">Register</h2>
          <p className="text-sm text-center text-gray-600 mt-2 hover:underline">
            Or{' '}
            <Link href="/login">
              login to your account
            </Link>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div className='mb-4'>
              <label htmlFor="Username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
                placeholder="Username"
                value={user.username}
                onChange={(e)=> setUser({...user, username:e.target.value })} 
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
                placeholder="Email address"
                value={user.email}
                onChange={(e)=> setUser({...user, email:e.target.value })}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
                placeholder="Password"
                value={user.password}
                onChange={(e)=> setUser({...user, password:e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              onClick={onSignup}
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-custom-green rounded-md hover:bg-custom-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-green"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
