import "./App.css";
import AppBig from "./Components/Layout/AppBig";
import AppMedium from "./Components/Layout/AppMedium";
import AppSmall from "./Components/Layout/AppSmall";

function App() {
  return (
    <>
      <div className="container">
        <AppBig />
        <div className="container_2">
          <AppMedium/>
          <AppSmall/>
        </div>
      </div>
    </>
  );
}

export default App;
