import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const RightSidebar = () => {
    return (
        <section className="w-full sticky top-2 overflow-scroll mt-2 flex flex-col items-stretch h-screen px-6">
            <div>
                <div className="w-full h-full relative group">
                    <input type="text" id="SearchBox" placeholder="Search Twitter" className="outline-none peer w-full h-full rounded-2xl bg-gray-200 py-2 pl-8"/>
                    {/* label */}
                    <CiSearch className="h-4.5 w-4.5 absolute top-2.5 left-2.5 text-gray-500" />
                </div>
            </div>
            <div className="flex flex-col rounded-xl bg-gray-100 my-2">
                <div className="flex items-center border-b-[1px]">
                    <h3 className="font-bold my-2 px-3">Trends for you</h3>
                    <IoSettingsOutline className="ml-auto mx-2 text-primary" />
                </div>
                <div>
                    {Array.from({length: 5}).map((_, i) => (
                        <div key={i} className="border-b-[1px] border-gray-200 p-3 space-x-3">
                            <div className="flex flex-col w-full justify-between">
                                <div className="flex-col items-center w-full">
                                    <div className="text-gray-400 text-xs">Trending worldwide</div>
                                    <div className="font-bold text-sm">#BreakingNews</div>
                                </div>
                                <div className="text-black text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda in perspiciatis, placeat tenetur eum rem debitis mollitia ad maxime dolores nihil minima consectetur nam quod, incidunt commodi laudantium sint.</div>
                                <div className="flex items-center w-full space-x-[80px] mt-1">
                                    {/* <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                        <IoSettingsOutline />
                                    </div>
                                    <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                        <IoSettingsOutline />
                                    </div>
                                    <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                        <IoSettingsOutline />
                                    </div>
                                    <div className="rounded-full hover:bg-gray-200 transition duration-300 p-2 cursor-pointer">
                                        <IoSettingsOutline />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default RightSidebar;