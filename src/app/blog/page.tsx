import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

// export const metadata :Metadata={
//   title:"blogList"
// }
const page = () => {
  return (
    <div className='bg-teal-300'>
        <h1>
          <Link className='hover:text-red-500' href='blog/1'> Blog page 1</Link>
         
          </h1>
        <h1> <Link className='hover:text-red-500' href='blog/2'> Blog page 2</Link></h1>
        <h1> <Link className='hover:text-red-500' href='blog/3'> Blog page 3</Link></h1>
        <h1> <Link className='hover:text-red-500' href='blog/4'> Blog page 4</Link></h1>
        <h1> <Link className='hover:text-red-500' href='blog/5'> Blog page 5</Link></h1>
        <h1>Blog page 6</h1>
        <h1>Blog page 7</h1>
        <h1>Blog page 8</h1>
        <h1>Blog page 9</h1>
    </div>
  )
}

export default page