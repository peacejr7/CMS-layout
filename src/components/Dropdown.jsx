import React from 'react'
import { useState } from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'

export default function Dropdown() {
    const [isOpen, setIsOpen]=useState(false);
  return (
    <div>
     <button
    onClick={() =>setIsOpen((prev)=>!prev)}
    className="text-lg text-yellow-500 font-bold rounded-lg  border-4 border-transparent active:border-yellow-500 duration-300 active:text-[#000080]"
    >
        Profile
        {!isOpen ?
            (<AiOutlineCaretDown className="h-8"/>):
            (<AiOutlineCaretUp className="h-8"/>)
        }
    </button>
    {isOpen &&(
        <div className="bg-yellow-500 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
            <a href="#"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-[#000080] hover:bg-yellow-500 dark:hover:bg-yellow-500">
						
						<span class="flex-1 ml-3 whitespace-nowrap">My Profile</span>
					</a>
            </div>
            <div className="flex flex-col items-center">
            <a href="/"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-[#00080] hover:bg-yellow-500 dark:hover:bg-yellow-500">
						<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
					</a>
            </div>
            </div>)}
    </div>
  )}
