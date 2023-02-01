import React from 'react'
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="basis-1/5"><Sidebar /></div>
        <div className="basis-4/5"><Feed /></div>
      </div>
    </div>
  )
}

export default Home