import react from "react";
import { Gallery, Home, Login, SignUp } from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
