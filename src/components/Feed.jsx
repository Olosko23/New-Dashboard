import React from 'react'

const Feed = () => {
  return (
    <div className="gap-2 py-4 px-4 mb-10">
      <div className="bg-gray-200 flex gap-2 justify-evenly px-2 py-2">
        <div>Summary</div>
        <div>Summary</div>
        <div>Summary</div>
      </div>
      <div className="mt-1 pt-1 mx-auto grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">Stock Market</div>
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">Crypto</div>
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">ETF</div>
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">Foreign Exchange</div>
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">Indices</div>
        <div className="w-3/4 h-3/4 border px-2 py-1 rounded-md shadow-md">Money Markets</div>
      </div>
      <div className="mb-12">
        <div>Latest from the markets</div>
        <div>
          <div>Title</div>
          <img src="/" alt="info" />
          <div>Desc</div>
          <div>Link</div>
        </div>
      </div>
    </div>
  )
}

export default Feed