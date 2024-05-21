import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiSquareMore } from "react-icons/ci";
import { FaBookmark, FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { LiaListSolid } from "react-icons/lia";
import { MdTravelExplore } from "react-icons/md";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/',
    icon: FaHome
  },
  {
    title: 'Explore',
    icon: MdTravelExplore
  },
  {
    title: 'Notifications',
    icon: IoNotifications
  },
  {
    title: 'Messages',
    icon: AiFillMessage
  },
  {
    title: 'Bookmarks',
    icon: FaBookmark
  },
  {
    title: 'Lists',
    icon: LiaListSolid
  },
  {
    title: 'Profile',
    icon: CgProfile
  },
  {
    title: 'More',
    icon: CiSquareMore
  }
];

const LeftSidebar = () => {
    return (
        <section className="fixed w-[290px] h-screen flex flex-col space-y-2 my-3">
          {NAVIGATION_ITEMS.map((item) => (
            <Link className="hover:bg-gray-100 text-l transition
              duration-300 flex items-center justify-start w-full space-x-4 rounded-3xl py-2 px-6" href={`/${item.path}`} key={item.title}>
              <div>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="font-semibold">
                {item.title}
              </div>
            </Link>
          ))}
          <button className="rounded-full m-8 bg-primary p-3 text-l hover:bg-opacity-80 transition duration-300 text-white font-semibold">Tweet</button>
        </section>    
    )
}

export default LeftSidebar;