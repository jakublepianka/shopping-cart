import { Outlet } from "react-router";
import { Header } from "./components/Header/Header.jsx";
import { Background } from "./components/Background/Background.jsx";

function App() {

  return (
    <>
      <Background />
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
