import "./App.css";
import TypeEffect from "./components/TypeEffect";

function App() {
  return (
    <div className="App bg-gray-900 text-white h-screen flex items-center justify-center">
      <TypeEffect text="Wibus4ma.dev..." speed={120} />
    </div>
  );
}

export default App;
