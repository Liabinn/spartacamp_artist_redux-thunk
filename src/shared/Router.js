import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Detail/:memberId" element={<Detail />} />
          <Route path="Login" element={<Login />} />
          <Route path="Profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
