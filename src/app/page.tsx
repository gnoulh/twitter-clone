import LeftSidebar from "@/components/LeftSidebar";
import Main from "@/components/Main";
import RightSidebar from "@/components/RightSidebar";


const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  )
};

export default Home;