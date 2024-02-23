import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-2 sticky top-0 z-10'>
        <nav className='flex h-14 justify-between max-w-screen-xl mx-auto items-center text-white'>
            <div className="left flex justify-center items-center space-x-2">
                <a href='#' className='text-2xl cursor-pointer'>Jasmeet</a>
            </div>

            <div className='flex space-x-[13px] sm:space-x-4'>
                <ul className="right hidden sm:flex space-x-8 text-xl">
                    <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                        <a href='#' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Home</a>
                    </li>
                    <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                        <a href='#skills' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Skills</a>
                    </li>
                    <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                        <a href='#projects' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Projects</a>
                    </li>
                    <li className='border-b-2 border-b-transparent hover:border-b-white transition-all duration-500'>
                        <a href='#contact' className='cursor-pointer transition text-[#e2e7ed] hover:text-white'>Contact</a>
                    </li>
                </ul>

                <div className="hamburger mt-[2px] flex flex-col space-y-[6px] sm:hidden">
                    <span className='line bg-white w-9 h-1 rounded-md transition-all duration-[400ms]'></span>
                    <span className='line bg-white w-9 h-1 rounded-md transition-all duration-[400ms]'></span>
                    <span className='line bg-white w-9 h-1 rounded-md transition-all duration-[400ms]'></span>
                </div>
            </div>

        </nav>
    </header>
    {/* <div className={`sideMenu z-10 sticky top-14 sm:hidden bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-center text-white transition-all duration-[500ms]`}>
        <ul className='flex flex-col space-y-3 py-2 text-lg'>
            <a href='#'>Home</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </ul>
    </div> */}
</>
  )
}

export default Navbar