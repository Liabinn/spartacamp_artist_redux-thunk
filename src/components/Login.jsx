import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios";

function Login() {
  // 회원가입 시 input 영역 value 가져오기
  const [joinInput, setJoinInput] = useState({
    userid: "",
    userpw: "",
    usernickname: ""
  });
  const onChangeJoinInput = e => {
    const {name, value} = e.target
    setJoinInput({
      ...joinInput,
      [name]: value,
    });
  };
  // 회원가입 시 db에 값 넣어주기
  const onSubmitdoSignUpHandler = async () => {
    try {
      const {data} = await axios.post(
        'http://localhost:4001/register',
        joinInput,
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  const [loginInput, setLoginInput] = useState({
    userid: "",
    userpw: ""
  })

  const [userId, setUserId] = useState({});
  const [userPw, setUserPw] = useState({});
  const [userNickName, setUserNickName] = useState({});

  // 로그인-회원가입 토글 state
  const [loginToggle, setLoginToggle] = useState(true);
  const onClickToggleHandler = () => setLoginToggle(prev => !prev);

  // 로그인 유무 확인 state
  // const [isValid, setValid] = useState(false);
  
  //user 정보 가져오기
  const [users, setUsers] = useState(null);

  // db 연결
  const fatchUsers = async () => {
    const {data} = await axios.get('http://localhost:4001/users');
    setUsers(data);
  }

  const onSubmitHandler = async () => {
    axios.post('http://localhost:4001/users', userId, userPw, userNickName);
    setUserId(userId);
    setUserPw(userPw);
    setUserNickName(userNickName);
  }

  useEffect(() => {
    fatchUsers();
  }, []);

  // 버튼 submit 막아주고
  const onSubmit = (e) => {
    e.preventDefault();
    // 버튼 클릭 시 input에 들어가는 값을 이용하여 db에 저장(post 요청)
    onSubmitdoSignUpHandler();
  }
  const onChangeUserId = e => setUserId({userid: e.target.value});
  const onChangeUserPw = e => setUserPw({userpw: e.target.value});
  

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {loginToggle === true ? (
        <LoginJoinBoxStyle>
        <LogJoinLabelstyle>로그인</LogJoinLabelstyle>
        <InputFormStyle onSubmit={onSubmit}>
          <InputStyle onChange={onChangeUserId} minLength={4} maxLength={10} value={userId.userid} placeholder='아이디(4~10글자)' required />
          <InputStyle onChange={onChangeUserPw} minLength={4} maxLength={15} value={userPw.userpw} placeholder='비밀번호(4~15글자)' required />
          <LogJoinBtnStyle type="submit">로그인</LogJoinBtnStyle>
        </InputFormStyle>
        <LabelStyle>아이디가 없으신가요?<LogJoinToggleBtnStyle onClick={()=>onClickToggleHandler()}>회원가입</LogJoinToggleBtnStyle></LabelStyle>
      </LoginJoinBoxStyle>
      ) : (
      <LoginJoinBoxStyle>
        <LogJoinLabelstyle>회원가입</LogJoinLabelstyle>
        <InputFormStyle onSubmit={onSubmit}>
          <InputStyle onChange={onChangeJoinInput} minLength={4} maxLength={10} name="userid" placeholder='아이디(4~10글자)' required />
          <InputStyle onChange={onChangeJoinInput} minLength={4} maxLength={15} name="userpw" type="password" placeholder='비밀번호(4~15글자)' required />
          <InputStyle onChange={onChangeJoinInput} minLength={1} maxLength={10} name='usernickname' placeholder='닉네임(1~10글자)' required />
          <LogJoinBtnStyle type="submit">회원가입</LogJoinBtnStyle>
        </InputFormStyle>
        <LabelStyle>아이디가 있으신가요?<LogJoinToggleBtnStyle onClick={()=>onClickToggleHandler()}>로그인</LogJoinToggleBtnStyle></LabelStyle>
      </LoginJoinBoxStyle>
      )}
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
  border-radius: 1.5rem;
  row-gap: 1rem;
  padding: 2rem;
  margin: 5rem 2rem 5rem 2rem;
  color: rgb(95, 2, 46);
`;

const LogJoinLabelstyle = styled.label`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const InputFormStyle = styled.form`
  display: flex;
  flex-direction: column;
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
  &:disabled {
    background-color: rgb(168, 202, 244);
  }
`;

export default Login;