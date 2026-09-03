

const App = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between px-4 py-2' >
        <h1 className='text-2xl font-semibold'>BloomFi</h1>
        <div className='flex justify-between items-center  gap-9'>
          <h6 className='text-1.2xl font-semibold'>USD bloom</h6>
          <h6 className='text-1.2xl font-semibold'>Bussiness</h6>
          <h6 className='text-1.2xl font-semibold'>Treasury</h6>
          <h6 className='text-1.2xl font-semibold'>Developers</h6>
          <h6 className='text-1.2xl font-semibold'>Contact us</h6>
        </div>
        <button className='bg-black px-6 py-1 rounded-full text-white '>Launch BETA</button>
      </div>
      <div className="h-[65vh] w-[98%] bg-center bg-cover flex ml-3 mr-2 mt-2 rounded-2xl 
      justify-center items-center relative text-center flex-col mb-9"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586973831178-c7fc19836126?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <h1 className="text-6xl font-extrabold  absolute top-6 ">+</h1>
        <h1 className="text-6xl font-normal  absolute top-20">Where Money Grows</h1>
        <p className=" mb-2">A programmable, utility-driven stable token <br />designed for native value accrual and seamless <br /> integration into Defi</p>
        <button className="bg-black text-white px-6 py-1 pb-1  rounded-full ">Try it now</button>
      </div >
      <div className="pl-5 pr-5 flex items-center justify-between  ">
        <div>
          <h1 className="text-4xl font-semibold pb-2 mb-2">What is USD bloom?</h1>
          <button className="bg-black rounded-full text-white px-5 py-1 pb-1.5">Explore more</button>
        </div>
        <h4 className="text-[20px] font-semibold ">USD bloom is a yield-bearing <br />stablecoin that helps your capital <br />grow while stagging pegged to the <br /> U.S. Dollor</h4>
      </div>
      <div className="flex justify-between mt-2">
        <div className=" h-60 w-[50%]  bg-pink-200 rounded-3xl m-3 bg-center bg-cover flex items-start justify-between flex-col p-3" style={{
          backgroundImage:
            " url( https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }}>
          <h4 className="text-2xl text-white font-semibold">Capital that grows</h4>
          <p className="text-white font-semibold">Earn passive income as your stablecoins <br /> are deployed into high-performing DeFi <br /> protocols</p>
        </div>
        <div className="h-60 w-[23%] bg-blue-950  m-3 rounded-3xl p-2 flex justify-between  flex-col items-start">
          <h4 className="text-white text-2xl p-2">Always Liquid, <br />Always Stable</h4>
          <p className="text-white p-2">stay fully dollor-pegged with intant access to your funds- no lockups or delays</p>
        </div>
        <div className="h-60 w-[23%] bg-blue-950  m-3 rounded-3xl p-2 flex justify-between  flex-col items-start">
          <h4 className="text-white text-2xl p-2">100% <br />Hands-free</h4>
          <p className="text-white p-2">No need to manage strategies manually , USD bloom works in the background for you.</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
