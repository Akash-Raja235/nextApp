import React from 'react'

const page = ({params}:{params:{postid:string}}) => {
  return (
    <div>Detail Page of post is : {params.postid}</div>
  )
}

export default page