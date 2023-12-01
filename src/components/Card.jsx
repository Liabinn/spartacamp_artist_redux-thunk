import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../image/default-avatar.png";

function Card({ memberId, member, nickname, contents }) {
  const navigate = useNavigate();

  return (
    <CardStyle
      onClick={() => {
        navigate(`/Detail/${memberId}`, { state: { memberId } });
      }}
    >
      <Bg></Bg>
      <CardBoxStyle>
        <CardNameStyle>To. {member}</CardNameStyle>
        <CardNameStyle>From. {nickname}</CardNameStyle>
        <CardContentStyle>{contents}</CardContentStyle>
      </CardBoxStyle>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  width: 500px;
  height: 150px;
  box-shadow: 3px 2px 15px 0 rgb(255, 104, 174);
  border-radius: 15px;
  padding: 20px;
  margin: 13px;
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 104, 174);
    color: white;
    cursor: pointer;
  }
`;

const Bg = styled.div`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  border-radius: 50px;
  width: 100px;
  height: 100px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Card;
