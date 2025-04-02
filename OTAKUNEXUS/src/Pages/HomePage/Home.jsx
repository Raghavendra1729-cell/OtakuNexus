import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
function Home() {
  return (
    <>
      <Navbar />
      <input type="text" onChange={(e)=> {setAnimeName((e.target.value).toLowerCase())}}/>

    </>
  )
}

export default Home
