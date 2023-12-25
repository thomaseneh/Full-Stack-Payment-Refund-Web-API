import "./App.css";
import Footer from "./components/footer/Footer";
import { RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import { router } from "./main";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
