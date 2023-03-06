import React, {Component} from "react";

class Section2 extends Component{
    render() {
        return (
            <div className="">
            <div>
            <h2 className="text-yellow-500 text-5xl md:font-bold text-center "> what to cover?</h2>
               <p className="text-[#000080] text-2xl mt-6 text-center">We will fully cover the following frameworks and JavaScript programming</p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-full p-8 space-y-8 text-center border-4 border-[#000080] text-[#000080] rounded-lg ">
                <p class="font-medium text-[#000080] uppercase text-[#000080]">Tailwind CSS</p>

                <img class="h-40 w-40 px-50 rounded-full items-center" src="https://res.cloudinary.com/arcjet-media/image/upload/c_scale,w_256/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" alt="#"/>

                <p class="font-medium text-[#000080] text-[#000080]">Full Course</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000080] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center bg-[#000080] rounded-lg">
                <p class="font-medium text-yellow-500 uppercase">Reat Js</p>

                <img class="h-40 w-40  rounded-full items-center" src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/301799419_456670456474672_6566292128822508765_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WSvExPbgpQ4AX82egYE&_nc_ht=scontent-jnb1-1.xx&oh=00_AfBELtRhFUubXoQ4_0FXJ_is4dMLrbFQBpt912W3KCf2Bw&oe=64098948" alt="#"/>

                <p class="font-medium text-yellow-500">Full Course</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-yellow-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center border-4 border-[#000080] text-[#000080] rounded-lg ">
                <p class="font-medium text-[#000080] uppercase text-[#000080]">JavaScript</p>

                <img class="h-40 w-40  rounded-full items-center" src="https://i.pinimg.com/originals/50/a6/42/50a6428d99f98e808074cceaf4c755e7.png" alt="#"/>

                <p class="font-medium text-[#000080] text-[#000080]">Full Course</p>

                <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000080] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
            </div>
               
            </div>
        );
    }
}
export default Section2;