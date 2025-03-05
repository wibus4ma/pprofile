import "./App.css";
import ParallaxStar from "./components/ParallaxStar/ParallaxStar";
import TypeEffect from "./components/TypeEffect";

function App() {
  return (
    <>
      <ParallaxStar />
      <div className="App text-white h-screen flex items-center justify-center">
        <TypeEffect text="Wibus4ma.dev..." speed={120} />
      </div>
    </>
  );
}

export default App;
