import React, { useState } from 'react'
import styled from 'styled-components';

function Login() {

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [toggle, setToggle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  }
  const onChangeUserId = e => setUserId(e.target.value);
  const onChangeUserPw = e => setUserPw(e.target.value);
  const onChangeUserNickName = e => setUserNickName(e.target.value);
  const onClickToggleHandler = () => setToggle(prev => !prev);

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <LoginJoinBoxStyle>
        <LogJoinLabelstyle>로그인</LogJoinLabelstyle>
        <InputFormStyle onSubmit={onSubmit} style={{display: "flex", flexDirection: "column"}}>
          <InputStyle onChange={onChangeUserId} minLength={4} maxLength={10} value={userId} placeholder='아이디(4~10글자)' />
          <InputStyle onChange={onChangeUserPw} minLength={4} maxLength={15} value={userPw} placeholder='비밀번호(4~15글자)' />
          <LogJoinBtnStyle>로그인</LogJoinBtnStyle>
        </InputFormStyle>
        <LabelStyle>아이디가 없으신가요?<LogJoinToggleBtnStyle onClick={onClickToggleHandler}>회원가입</LogJoinToggleBtnStyle></LabelStyle>
      </LoginJoinBoxStyle>
      <LoginJoinBoxStyle>
        <LogJoinLabelstyle>회원가입</LogJoinLabelstyle>
        <InputFormStyle onSubmit={onSubmit} style={{display: "flex", flexDirection: "column"}}>
          <InputStyle onChange={onChangeUserId} minLength={4} maxLength={10} value={userId} placeholder='아이디(4~10글자)' />
          <InputStyle onChange={onChangeUserPw} minLength={4} maxLength={15} value={userPw} placeholder='비밀번호(4~15글자)' />
          <InputStyle onChange={onChangeUserNickName} minLength={1} maxLength={10} value={userNickName} placeholder='닉네임(1~10글자)' />
          <LogJoinBtnStyle>회원가입</LogJoinBtnStyle>
        </InputFormStyle>
        <LabelStyle>아이디가 있으신가요?<LogJoinToggleBtnStyle onClick={onClickToggleHandler}>로그인</LogJoinToggleBtnStyle></LabelStyle>
      </LoginJoinBoxStyle>
    </div>
  )
}

const LoginJoinBoxStyle = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 rgb(255, 104, 174);
  border-radius: 15px;
  row-gap: 10px;
  padding: 2rem;
  margin: 20px;
  color: rgb(95, 2, 46);
`;

const LogJoinLabelstyle = styled.label`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const InputFormStyle = styled.form`
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const InputStyle = styled.input`
  height: 2rem;
  background-color: transparent;
  border-width: 0 0 0.1rem;
  outline: none;
  &:focus {
    border-width: 0 0 0.1rem;
    box-shadow: 0 0.1rem 0 0 rgb(255, 215, 234);
    border-color: rgb(255, 104, 174);
    transition: 0.5s;
  }
`;

const LogJoinBtnStyle = styled.button`
  font-weight: bolder;
  font-size: 1rem;
  color: rgb(95, 2, 46);
  height: 3rem;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 rgb(255, 255, 255);
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 104, 174);
    color: white;
    cursor: pointer;
  }
`;

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogJoinToggleBtnStyle = styled.button`
  font-weight: bolder;
  font-size: 1rem;
  color: rgb(95, 2, 46);
  width: 5rem;
  background-color: transparent;
  border: none;
  margin-left: 1rem;
  transition: 0.3s;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default Login;