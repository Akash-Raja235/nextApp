import React,{ FC,ReactNode }  from 'react'

interface LayoutProps{
    children:ReactNode
}
const layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>{children}</div>
  )
}

export default layout