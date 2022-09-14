import styled from "styled-components";

const SelectContainerSC = styled.div`
  margin-left: 6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MeasurementSC = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  align-self: flex-start;
`;

const FlexContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.6rem;
  box-sizing: border-box;
`;

const FlexStartSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxContainerSC = styled.div`
  margin-left: 1rem;

  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  user-select: none;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const ChartSC = styled.div`
  display: flex;
  width: 100%;
  min-width: 75rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 0.3rem;
  margin-bottom: 0.6rem;
  padding: 0.6rem;
  height: fit-content;
  box-sizing: border-box;
  overflow: hidden;
`;

export {
  ChartSC,
  SelectContainerSC,
  MeasurementSC,
  FlexContainerSC,
  FlexStartSC,
  CheckboxContainerSC,
};
