import "./App.css";
import ParallaxStar from "./components/ParallaxStar/ParallaxStar";
import TypeEffect from "./components/TypeEffect";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaTiktok,
} from "react-icons/fa6";

function App() {
  return (
    <>
      <ParallaxStar />
      <div className="App text-white h-screen flex items-center justify-center flex-col">
        <div className="h-full flex items-center justify-center relative min-w-[320px]">
          <TypeEffect text="Wibus4ma.dev..." speed={120} />
          <p className="absolute right-0 bottom-[42%] underline cursor-pointer">
            wibus4ma?
          </p>
          <div className="relative inline-block">
            <button
              className="bg-primary inline-flex rounded text-base font-semibold text-black whitespace-nowrap"
              data-tooltip-target="top-tooltip"
            >
              Tooltip on top
            </button>
            <div
              className="absolute bottom-full invisible left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-white py-2 px-4 text-xs text-gray-800 font-medium transition-opacity duration-300 border border-gray-300 shadow-[0px_12px_30px_-4px_rgba(16,24,40,0.08);]"
              role="tooltip"
              id="top-tooltip"
            >
              <span className="absolute -bottom-1.5 left-1/2 -z-10 h-3 w-3 border-b border-r border-gray-300 -translate-x-1/2 rotate-45  bg-white"></span>
              This is a tooltip
            </div>
          </div>
        </div>
        <div className="min-w-[320px] mb-4">
          <ul className="flex justify-center space-x-4 border rounded-l-full rounded-r-full p-2">
            <a href="https://www.facebook.com/tan.phat2104" target="_blank">
              <FaSquareFacebook className="text-[#486BA3] text-4xl hover:scale-150 duration-300 cursor-pointer" />
            </a>
            <a href="https://github.com/wibus4ma" target="_blank">
              <FaSquareGithub className=" text-4xl hover:scale-150 duration-300 cursor-pointer" />
            </a>
            <li>
              <FaLinkedin className="text-[#0A66C2] text-4xl hover:scale-150 duration-300 cursor-pointer" />
            </li>
            <li>
              <FaTiktok className="text-black bg-white p-1 text-[32px] mt-[1px] rounded-[2px] hover:scale-150 duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
