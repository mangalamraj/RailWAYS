import React from 'react'
import './admin.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className="ad_main">
        <div><Link className="main-up" href="/addTrains">Add trains</Link></div>
    </div>
  )
}

export default page