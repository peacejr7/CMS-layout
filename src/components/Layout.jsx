import React, {Component} from "react";
import Dropdown from "./Dropdown";

class Layout extends Component{
    render(){ 
        return(
            
           
<div class="flex min-h-screen flex-row bg-[#000080] text-gray-800">
            <aside class="sidebar w-48 -translate-x-full transform bg-[#000080] p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
              <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
              <ul class="space-y-2">
              <li>
                          <img class="h-100 w-100  rounded-full " src="https://image.winudf.com/v2/image1/Y29tLmlzdC5sb2dvbWFrZXJfaWNvbl8xNjIyODMyMzI2XzA5OA/icon.png?fakeurl=1&h=240&type=webp" alt="#"/>
                          </li>
                          <li>
                              <a href="#"
                                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                  </svg>
                                  <span class="ml-3">Dashboard</span>
                              </a>
                          </li>
                          <li>
                              <a href="#" target="_blank"
                                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                      </path>
                                  </svg>
                                  <span class="flex-1 ml-3 whitespace-nowrap">Create a Blog</span>
                                  <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                              </a>
                          </li>
                          <li>
                              <a href="#" target="_blank"
                                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                      </path>
                                      <path
                                          d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                      </path>
                                  </svg>
                                  <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                              </a>
                          </li>
                          <li>
                              <a href="#"
                                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                              </a>
                          </li>
                          <li>
                              <a href="#"
                                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd"
                                          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                  <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                              </a>
                          </li>
                      </ul>
              </div>
              <div class="my-4"></div>
            </aside>
            <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
            <nav className='p-3 shadow md:flex md:items-center md:justify-between bg-[#000080]  top-0 right-0'>
          <div>
              <span className='text-yellow-500 text-5xl md:font-bold' >LOGO</span>
              
          </div>
          
					<Dropdown/>
				
      </nav>
              <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">Content</div>
            </main>
          </div>

           
        )
     } 
}
export default Layout;