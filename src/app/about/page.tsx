import React from 'react'


export interface Car {
model:string,
price:number,
name:string
}

  const page = () => {


 let myCar:Record<string,number> = {
  'model':14,
  'price':140000,
  // name:"Maruti suvo"
 
 }





  return (
    <div>About Page</div>
  )
}

export default page