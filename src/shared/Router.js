import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import LoginPage from "pages/LoginPage";
import Profile from "pages/Profile";
// import { useSelector } from "react-redux";

const Router = () => {

  // const authstate = useSelector(state => state.authSlice);

  return (
      <BrowserRouter>
        <Routes>
          {/* 회원가입-로그인 구현을 하지 못해 임시로 주석처리 해놓음 */}
          {/* <Route path="/" element={authstate.isAuth === false ? <LoginPage /> : <Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="detail/:memberId" element={<Detail />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
};

export default Router;
