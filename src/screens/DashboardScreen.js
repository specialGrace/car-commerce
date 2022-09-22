import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      Dashboard
     <Link to='/dashboard/profile'>Profile</Link>
     <Link to='/dashboard/orders'>Orders</Link>
     <Link to='/dashboard/receipts'>Receipts</Link>
    </div>
  )
}

export default Dashboard