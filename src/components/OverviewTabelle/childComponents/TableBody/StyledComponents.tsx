import styled from "styled-components";

const RowSC = styled.tr`
  background-color: white;
  transition: all 0.5s;
  border-radius: 0.3rem;
  cursor: pointer;
  transition-delay: 0.1s;
  &:nth-of-type(even) {
    background-color: hsl(0, 0%, 95%);
    border-bottom: 1px solid black;
  }
  &:hover {
    filter: brightness(90%);
  }
`;

export type FieldProps = {
  color: string | undefined;
  showColors: boolean;
};

const FieldSC = styled.td<FieldProps>`
  text-align: center;
  vertical-align: middle;
  background-color: ${({ color, showColors }) =>
    color && showColors ? color : null};
  padding: 0.2rem 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s;

  &:hover {
    background-color: #81bbff;
  }
`;

const FieldContentSC = styled.div`
  ${
    "" /* border-bottom: 1px solid black;
  margin: 3px;
  border-radius: 5px; */
  }
`;

const TableBodySC = styled.tbody``;

export { TableBodySC, RowSC, FieldSC, FieldContentSC };
