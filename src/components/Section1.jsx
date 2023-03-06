import React, {Component} from "react";

class Section1 extends Component{
    render() {
        return (
            <div className="pl-20 grid lg:grid-cols-2 my-[120px] gap-40">
            <div  >
            <h1 className="text-yellow-500 text-4xl md:font-bold ">You are welcome to <span className='text-[#000080] text-4xl md:font-bold' >LOGO</span> </h1>
               <p className="text-[#000080] text-2xl mt-6">This is the right place for you to be in if you want to become a professional front-end developer with React.</p>
            </div>
            <div className="grid">       
            <img class="h-100 w-100  rounded-full " src="https://image.winudf.com/v2/image1/Y29tLmlzdC5sb2dvbWFrZXJfaWNvbl8xNjIyODMyMzI2XzA5OA/icon.png?fakeurl=1&h=240&type=webp" alt="#"/>
            </div>
               
            </div>
        );
    }
}
export default Section1;