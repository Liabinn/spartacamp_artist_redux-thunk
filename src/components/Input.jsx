import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCard } from 'redux/modules/letterSlice';

const selectList = [
  { value: "default", name: "멤버 선택" },
  { value: "찬혁", name: "찬혁" },
  { value: "수현", name: "수현" },
];

function Input() {

  const dispatch = useDispatch();

  const [nickname, setNickName] = useState('');
  const [contents, setContents] = useState('');
  const [selected, setSelected] = useState('멤버 선택');

  const addCardHandler = () => {
    if (selected === "멤버 선택") return alert("멤버를 선택해주세요");
    if (nickname === "") return alert("닉네임을 입력해주세요");
    if (contents === "") return alert("내용을 입력해주세요");
    const newCard = {
      id: uuidv4(),
      nickname,
      contents,
      member: selected,
    };
    dispatch(addCard(newCard));

    setSelected('멤버 선택')
    setNickName('');
    setContents('');
    alert('팬레터가 등록되었습니다.')
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InputBoxStyle>
        <SectionStyle>
          <label>누구에게 보내실 건가요?</label>
          <SelectBoxStyle onChange={handleSelect} value={selected}>
            {" "}
            {selectList.map((item) => {
              return (
                <SelectOptionStyle value={item.value} key={item.value}>
                  {item.name}
                </SelectOptionStyle>
              );
            })}
          </SelectBoxStyle>
        </SectionStyle>
        <SectionStyle>
          <label>닉네임</label>
          <InputNickNameStyle
            type="text"
            maxLength={20}
            value={nickname}
            onChange={onChangeNickName}
            placeholder="최대 20자까지 작성할 수 있습니다."
          />
        </SectionStyle>
        <SectionStyle>
          <label>내용</label>
          <TextareaContentStyle
            type="text"
            maxLength={100}
            value={contents}
            onChange={onChangeContents}
            placeholder="최대 100자까지 작성할 수 있습니다."
          />
        </SectionStyle>
        <WriteButtonStyle onClick={addCardHandler}>등록</WriteButtonStyle>
      </InputBoxStyle>
    </div>
  );
}

const InputBoxStyle = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 rgb(255, 104, 174);
  border-radius: 15px;
  row-gap: 10px;
  padding: 20px;
  margin: 20px;
`;

const SectionStyle = styled.section`
  width: 365px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  color: rgb(95, 2, 46);
`;

const SelectBoxStyle = styled.select`
  width: 150px;
  height: 25px;
  color: rgb(95, 2, 46);
  font-weight: bolder;
  border-color: white;
  border-radius: 5px;
  outline: none;
  text-align-last: center;
  text-align: center;
  &:hover {
    border: 1.5px solid rgb(255, 104, 174);
    box-shadow: 0 0 10px #d6a8e9;
  }
`;

const SelectOptionStyle = styled.option`
  color: rgb(95, 2, 46);
  font-weight: bolder;
  outline: none;
  border-color: white;
  border-radius: 5px;
`;

const InputNickNameStyle = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid white;
  border-radius: 5px;
  outline-color: rgb(255, 104, 174);
  &:hover {
    border: 1.5px solid rgb(255, 104, 174);
    box-shadow: 0 0 10px #d6a8e9;
  }
  &::placeholder {
    text-align: center;
  }
`;

const TextareaContentStyle = styled.textarea`
  width: 300px;
  height: 100px;
  border: 1px solid white;
  border-radius: 5px;
  outline-color: rgb(255, 104, 174);
  resize: none;
  &:hover {
    border: 1.5px solid rgb(255, 104, 174);
    box-shadow: 0 0 10px #d6a8e9;
  }
  &::placeholder {
    text-align: center;
  }
`;

const WriteButtonStyle = styled.button`
  font-weight: bolder;
  color: rgb(95, 2, 46);
  width: 100px;
  height: 30px;
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

export default Input;
