import React, { Component } from 'react';

class Navbar extends Component {
    render(){
      return (
      <nav className='p-6 shadow md:flex md:items-center md:justify-between bg-[#000080] fixed left-0 top-0 right-0'>
          <div>
              <span className='text-yellow-500 text-5xl md:font-bold' >LOGO</span>
              
          </div>
          <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
             <li className='mx-5 my-6 md:my-0 text-yellow-500 '>
             <a className='text-xl hover:text-yellow-100 duration-500' href='/'>HOME</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-yellow-500'>
             <a className='text-xl hover:text-yellow-100 duration-500' href='/Layout'>ABOUT</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-yellow-500'>
             <a className='text-xl hover:text-yellow-100 duration-500 text-yellow-500' href='/Services'>SERVICES</a>
             </li>
             <li className='mx-5 my-6 md:my-0 text-yellow-500'>
             <a className='text-xl hover:text-yellow-100 duration-500 text-yellow-500' href='/Contact'>CONTACT US</a>
             </li>
             <li>
					<a href="/Layout"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500">
						<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
					</a>
				</li>
             
          </ul>
      </nav>
      )
    }
  }
  export default Navbar;