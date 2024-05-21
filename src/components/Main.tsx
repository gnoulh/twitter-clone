import React from "react";
import { FaRetweet } from "react-icons/fa6";
import { IoIosArrowDown, IoIosHeartEmpty } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { RiShare2Line } from "react-icons/ri";

const Main = () => {
    return (
        <main className="ml-[290px] flex w-full max-w-[560px] h-full min-h-screen flex-col border-l-[1.8px] border-r-[1.8px] border-gray-300">
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="items-center px-3 py-[10px] backdrop-blur top-0 sticky">
                <h1 className="relative text-2xl font-bold">Home</h1>
                <div className="space-x-3">
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
            </div>
            <div className="top-1 px-3 py-3 items-stretch space-x-1 relative border-t-[1.5px] border-b-[8px] flex border-gray-200">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex-none"></div>
                <div className="flex flex-col w-full h-full">
                    <input type="text" className="text-xl placeholder:text-gray-500 p-2.5 outline-none" placeholder="What's uppp"/>
                    <div className="w-full justify-between items-center flex">
                        <div></div>
                        <button className="rounded-full m-3 bg-primary px-5 py-2 text-l hover:bg-opacity-80 transition duration-300 text-white font-semibold">Tweet</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {Array.from({length: 5}).map((_, i) => (
                    <div key={i} className="border-b-[1.5px] border-gray-200 p-3 flex space-x-3">
                        <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                        <div className="flex flex-col w-full justify-between">
                            <div className="flex items-center w-full text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="font-bold">A</div>
                                    <div className="text-gray-400">@aaa</div>
                                </div>
                                <div className="text-gray-400"><LuDot /></div>
                                <div className="text-gray-400">Now</div>
                                <IoIosArrowDown className="ml-auto" />
                            </div>
                            <div className="text-black text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda in perspiciatis, placeat tenetur eum rem debitis mollitia ad maxime dolores nihil minima consectetur nam quod, incidunt commodi laudantium sint.</div>
                            {/* <div className="w-full h-20 bg-slate-300 rounded-xl aspect-square mt-2"></div> */}
                            <div className="flex items-center w-full space-x-[80px] mt-1">
                                <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                    <IoChatbubbleOutline />
                                </div>
                                <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                    <FaRetweet />
                                </div>
                                <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                    <IoIosHeartEmpty />
                                </div>
                                <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                    <RiShare2Line />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main;