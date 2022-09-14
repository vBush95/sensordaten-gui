import styled from "styled-components";

const OrderedListSC = styled.ol`
  display: list-item;
  list-style-type: none;
`;

const NameSC = styled.summary`
  cursor: pointer;
  padding: 0.3em;
  border-radius: 0.3em;
  user-select: none;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const NumberSC = styled.div`
  position: absolute;
  right: 0.6em;
  top: 0.3em;
  padding: 0px 0.3em;
  background-color: #dcdcdc;
  width: fit-content;
  pointer-events: none;
  border-radius: 0.3em;
`;

const DeviceGroupLiSC = styled.li`
  position: relative;
  padding: 0.6em;
  padding-top: 0;

  background-color: white;
  text-align: left;
`;

export { DeviceGroupLiSC, OrderedListSC, NameSC, NumberSC };
