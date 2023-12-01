import Card from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

function CardList() {

  const selectMember = useSelector(state => state.memberSlice)
  const letters = useSelector(state => state.letterSlice)

  // selectMember에 따라 filter를 해주고 밑에서 그리자! 라는 취지.
  const filtered =
    selectMember === "전체"
      ? letters
      : letters?.filter((member) => member.member === selectMember);

  // 데이터가 없을 시 보여줄 UI
  if (filtered.length === 0) {
    return (
      <CardListStyle>
        <CardNoneStyle>
          {selectMember}에게 남겨진 팬레터가 없습니다. 😥
          <br /> 첫 번째 팬레터의 주인공이 되어주세요! 😉
        </CardNoneStyle>
      </CardListStyle>
    );
  }
  
  return (
    <CardListStyle>
      {filtered.map(member => {
        return (
          <Card
        key={member.id}
        memberId={member.id}
        member={member.member}
        nickname={member.nickname}
        contents={member.contents} />
        )
      })}
    </CardListStyle>
  );
}

const CardListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 65px;
`;

const CardNoneStyle = styled.div`
  width: 500px;
  height: 100px;
  box-shadow: 3px 2px 15px 0 rgb(255, 104, 174);
  border-radius: 15px;
  padding: 20px;
  margin: 13px;
  color: rgb(95, 2, 46);
  font-weight: bolder;
  line-height: 200%;
  text-align: center;
`;

export default CardList;
