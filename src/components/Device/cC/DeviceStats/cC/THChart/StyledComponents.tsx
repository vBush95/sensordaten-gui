import styled from "styled-components";

const MesswerteContainerSC = styled.div`
  position: absolute;
  left: 13.2rem;
  top: 1rem;
  ${
    "" /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  }
  font-size: 10pt;
  height: fit-content;
`;

const ValueSC = styled.div`
  margin-bottom: 0.3rem;
`;

const DescriptionSC = styled.div`
  font-weight: bold;
`;

export type BHColor = {
  color: string | null;
};

const BehaglichkeitSC = styled.div`
  color: ${({ color }) => color};
  font-weight: bold;
`;

const SeperatorSC = styled.hr`
  width: 100%;
  margin-top: 0.3rem;
  border: none;
  border-top: 1px solid #212529;
`;

const ChartDimensionsSC = styled.div`
  width: 20rem;
  height: 13.3rem;
`;

const THChartSC = styled.div`
  margin: 0px 5px;
  ${"" /* border: 1px solid black; */}
  border-radius: 5px;

  user-select: none;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  margin: auto;
`;

export {
  THChartSC,
  MesswerteContainerSC,
  ValueSC,
  DescriptionSC,
  BehaglichkeitSC,
  SeperatorSC,
  ChartDimensionsSC,
};
