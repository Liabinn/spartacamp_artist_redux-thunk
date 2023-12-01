import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import image from '../image/default-avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard, editeCard } from 'redux/modules/letterSlice';

function Detail() {
  // const params = useParams(); // URL 뒤에 붙은 값들이 객체로 담겨옵니다.
  // const { memberId, name } = params; // 꺼내서 쓰실 때는 구조분해 할당 or 하나씩 접근해서 사용하시면 됩니다
  const letters = useSelector(state => state.letterSlice);
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const cardInfo = { ...location.state };
  const founded = letters?.find((card) => card.id === cardInfo.memberId);

  const handleOnClickDelete = () =>{
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      alert('삭제되었습니다.')
      dispatch(deleteCard(founded.id));
      navigate('/');
    } 
  }

  const [isEditing, setIsEditing] = useState(false);
  const [editedContents, setEditedContents] = useState(founded.contents);

  const handleOnClickModify = () => {
    // 현재 값을 => !현재 값으로
    // !현재 값 => 현재 값으로
    setIsEditing((prev) => !prev);
  };

  //onChange 이벤트 발생 시 editedContents를 업데이트
  const handleChangeEditText = (e) => {
    setEditedContents(e.target.value);
  };

  //onClick 시 기존 contents => editedContents로 변경
  const handleClickModifyContents = () => {
    if (founded.contents === editedContents) {
      alert("수정사항이 없습니다.");
      return setIsEditing(false);
    }
    dispatch(editeCard({id: founded.id, editedContents}));
    setIsEditing(false);
    alert("수정이 완료되었습니다.");
  };

  return (
    <EntireBoxStyle>
      <DetailBoxStyle>
        <HomeButtonStyle
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </HomeButtonStyle>
        <CardStyle>
          <Bg></Bg>
          <CardBoxStyle>
            <CardNameStyle>To. {founded?.member}</CardNameStyle>
            <CardNameStyle>From. {founded?.nickname}</CardNameStyle>
            {isEditing ? <EdieingTextareaStyle type='text' maxLength={100} onChange={handleChangeEditText}>{founded.contents}</EdieingTextareaStyle> : <CardContentStyle>{founded.contents}</CardContentStyle>}
            <ButtonBoxStyle>
              {isEditing ? <CardButtonStyle onClick={() => {
              handleClickModifyContents(founded?.id)
            }}>수정완료</CardButtonStyle> : <CardButtonStyle onClick={handleOnClickModify}>수정</CardButtonStyle>}
            {isEditing ? <CardButtonStyle onClick={handleOnClickModify}>수정취소</CardButtonStyle> : <CardButtonStyle onClick={handleOnClickDelete}>삭제</CardButtonStyle>}
            </ButtonBoxStyle>
          </CardBoxStyle>
        </CardStyle>
      </DetailBoxStyle>
    </EntireBoxStyle>
  );
}

const EntireBoxStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const Bg = styled.div`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  border-radius: 50px;
  width: 100px;
  height: 100px;
`;

const DetailBoxStyle = styled.div`
  width: 500px;
  margin: 20px;
`;

const HomeButtonStyle = styled.button`
  margin: 20px;
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

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  width: 500px;
  min-height: 300px;
  box-shadow: 3px 2px 15px 0 rgb(255, 104, 174);
  border-radius: 15px;
  padding: 20px;
  margin: 13px;
  transition: 0.3s;
`;

const CardBoxStyle = styled.ul`
  width: 350px;
`;

const CardNameStyle = styled.li`
  color: rgb(95, 2, 46);
  font-size: medium;
  font-weight: bolder;
  margin: 5px;
  padding: 5px;
`;

const CardContentStyle = styled.li`
  color: rgb(95, 2, 46);
  font-size: medium;
  font-weight: bolder;
  margin: 5px;
  padding: 8px 5px 8px 5px;
  border: 1px solid white;
  border-radius: 5px;
  width: 320px;
  min-height: 150px;
  white-space: wrap;
  line-height: 150%;
`;

const EdieingTextareaStyle = styled.textarea`
  width: 320px;
  height: 150px;
  color: rgb(95, 2, 46);
  font-size: medium;
  font-weight: bolder;
  margin: 5px;
  border: 1px solid white;
  border-radius: 5px;
  background: transparent;
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

const CardButtonStyle = styled.button`
  font-weight: bolder;
  color: rgb(95, 2, 46);
  width: 100px;
  height: 30px;
  margin-left: 10px;
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

const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 325px;
`;

export default Detail;
