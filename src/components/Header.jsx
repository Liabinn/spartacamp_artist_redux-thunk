import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <Logo>AKMU</Logo>
      <Subtitle>Fan Letter Collection</Subtitle>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  margin: 80px auto 50px auto;
`;

const Logo = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  color: rgb(255, 104, 174);
  text-shadow:
    -1.5px -1px 0 white,
    1px -1px 0 rgb(252, 7, 121),
    -1px 1px 0 rgb(95, 2, 46),
    1px 1px 0 rgb(95, 2, 46);
`;

const Subtitle = styled.h2`
  font-size: 35px;
  color: rgb(95, 2, 46);
  text-shadow:
    -1px -1px 0 rgb(255, 180, 215),
    1px -1px 0 rgb(255, 180, 215),
    -1px 1px 0 rgb(255, 180, 215),
    1px 1px 0 rgb(255, 180, 215);
`;

export default Header;
