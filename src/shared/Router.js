import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import LoginPage from "pages/LoginPage";
import Profile from "pages/Profile";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:memberId" element={<Detail />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
