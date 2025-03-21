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
