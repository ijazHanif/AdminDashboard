'use client'
import React from 'react'
import AuthenticationPage from './authScreen/page'

const Page = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <AuthenticationPage/>
      {/* <Button onClick={goToDashboard}>Go to Dashboard</Button> */}
    </div>
  )
}

export default Page
