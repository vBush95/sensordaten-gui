import React from "react";
import NavigationButton from "./childComponents/NavigationButton/NavigationButton";
import {
  DeviceHeaderSC,
  H1SC,
  H2MissingSC,
  H2SC,
  ContainerSC,
} from "./StyledComponents";
import firstLetterToUpperCase from "../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

export type DHProps = {
  index: number;
  devices: DeviceObject[];
  device: DeviceObject;
};

const DeviceHeader = ({ index, devices, device }: DHProps) => {
  return (
    <DeviceHeaderSC>
      <NavigationButton rotation={0} index={index} devices={devices} />

      <ContainerSC>
        <H1SC>{firstLetterToUpperCase(device.device)}</H1SC>
        {device?.group !== null ? (
          <H2SC>{firstLetterToUpperCase(device?.group)}</H2SC>
        ) : (
          <H2MissingSC>-</H2MissingSC>
        )}
      </ContainerSC>
      <NavigationButton rotation={180} index={index} devices={devices} />
    </DeviceHeaderSC>
  );
};

export default DeviceHeader;
