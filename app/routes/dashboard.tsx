
import React from 'react'
import { Outlet } from 'react-router'

function Dashboard() {

  //  then add outlent to where you want to display it nested child
// might be at the beg
  return (
    <><div> wellcome to your dashboard</div>  <Outlet/></>
  )
}

export default Dashboard