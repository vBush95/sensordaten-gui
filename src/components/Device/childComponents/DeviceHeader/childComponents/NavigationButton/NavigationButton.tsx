import React, { useEffect, useState } from "react";
import SquareArrowIcon from "./childComponents/SquareArrowIcon";
import { useNavigate } from "react-router-dom";
import firstLetterToUpperCase from "../../../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";

import {
  NavigationButtonSC,
  ContainerSC,
  DisabledSC,
  TextSC,
} from "./StyledComponents";
import { DeviceObject } from "../../../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";

const noDevice = (
  <DisabledSC>
    <TextSC>No Device</TextSC>
  </DisabledSC>
);

export type NBProps = {
  rotation: 180 | 0;
  index: number;
  devices: DeviceObject[];
};

const NavigationButton = ({ rotation, index, devices }: NBProps) => {
  const [button, setButton] = useState(noDevice);
  let navigate = useNavigate();

  const previousDevice = (
    <ContainerSC
      onClick={() =>
        navigate(`/sensordaten/sensor/${devices[index - 1].device}`)
      }
    >
      <SquareArrowIcon rotation={rotation} />
      <TextSC>{firstLetterToUpperCase(devices[index - 1]?.device)}</TextSC>
    </ContainerSC>
  );

  const nextDevice = (
    <ContainerSC
      onClick={() =>
        navigate(`/sensordaten/sensor/${devices[index + 1].device}`)
      }
    >
      <TextSC>{firstLetterToUpperCase(devices[index + 1]?.device)}</TextSC>
      <SquareArrowIcon rotation={rotation} />
    </ContainerSC>
  );

  useEffect(() => {
    let displayedButton = noDevice;
    if (devices) {
      displayedButton =
        devices && rotation === 0 && index >= 1
          ? previousDevice
          : rotation === 180 && index + 1 < devices.length
          ? nextDevice
          : noDevice;
    }

    setButton(displayedButton);
  }, [index]);

  return button;
};

export default NavigationButton;
