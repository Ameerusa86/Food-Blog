import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Preloader from "./Components/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <>{isLoading ? <Preloader /> : <Home />}</>;
}

export default App;
