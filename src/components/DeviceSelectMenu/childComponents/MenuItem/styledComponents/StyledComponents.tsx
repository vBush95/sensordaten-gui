import styled from "styled-components";

const ListHeadingSC = styled.div`
  font-size: 24px;

  font-weight: bold;
  letter-spacing: -0.5px;
  text-align: left;
  position: relative;

  background-color: white;
`;

const StyledLinkSC = styled.div`
  background-color: white;
  border-radius: 5px;
  color: black;
  padding: 5px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const HeaderTextSC = styled.div`
  margin-left: 7px;
`;

export {  ListHeadingSC, StyledLinkSC, HeaderTextSC };
