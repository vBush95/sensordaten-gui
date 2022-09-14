import React from "react";
import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { ActiveCharts } from "../../Device";
import SelectButton from "./cC/SelectButton/SelectButton";
import {
  DeviceChartsMenuSC,
  HeaderSC,
  HeaderTextSC,
  CheckboxContainerSC,
  ButtonsContainerSC,
} from "./StyledComponents";

export type DCMenuProps = {
  handleCheckboxClick: () => void;
  checked: boolean;
  device: DeviceObject;
  setActiveCharts: React.Dispatch<React.SetStateAction<ActiveCharts>>;
  activeCharts: ActiveCharts;
};

const DeviceChartsMenu = ({
  handleCheckboxClick,
  checked,
  device,
  setActiveCharts,
  activeCharts,
}: DCMenuProps) => {
  return (
    <DeviceChartsMenuSC>
      <HeaderSC>
        <HeaderTextSC>Graphen anzeigen für:</HeaderTextSC>

        <CheckboxContainerSC onClick={handleCheckboxClick}>
          <input
            type="checkbox"
            id="showColors"
            name="showColors"
            checked={checked}
            readOnly
          />
          <label htmlFor="showColor" style={{ cursor: "pointer" }}>
            {checked ? "alle ausblenden" : "alle einblenden"}
          </label>
        </CheckboxContainerSC>
      </HeaderSC>
      <ButtonsContainerSC>
        {Object.keys(device.entities)
          .filter((filterKey) => {
            return device.entities[filterKey]?.state ? true : false;
          })
          .map((key, index) => {
            return (
              <SelectButton
                key={`GraphButton-${index}`}
                type={key}
                show={activeCharts[key as keyof ActiveCharts]}
                updateActiveCharts={setActiveCharts}
              />
            );
          })}
      </ButtonsContainerSC>
    </DeviceChartsMenuSC>
  );
};

export default DeviceChartsMenu;
