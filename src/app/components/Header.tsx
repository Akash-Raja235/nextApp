"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {


    const pathname = usePathname()

   

  
    const navLink =[

        {name:"Blog", href:'/blog'},
        {name:"Conatct", href:"/contact"},
        {name:"About", href:"/about"},
        {name:"Register", href:"/register"},
        {name:"Login", href:"/login"}
    ]
  return (
    <div>
       <div className='flex justify-evenly items-start text-white bg-blue-300  text-2xl font-semibold py-2'>



          {
            navLink && 
            navLink.map((link)=>{
                const isActive =  pathname.startsWith(link.href)
                return(
                    <Link className={`${isActive? 'text-yellow-300':'text-red-500' }`} href={link.href} key={link.name}>
                         {link.name}
                    </Link>
                )
            })
          }
            {/* <Link className='hover:text-gray-900' href='/'>Home</Link>
            <Link className='hover:text-gray-900' href='/blog'>Blog</Link>
            <Link className='hover:text-gray-900' href='/contact'>Contact</Link>
            <Link  className='hover:text-gray-900' href='/about'>About</Link>
            <Link  className='hover:text-gray-900' href='/register'>Register</Link>
            <Link className='hover:text-gray-900' href='/login'>Login</Link> */}

            </div>

        
    </div>
  )
}

export default Header