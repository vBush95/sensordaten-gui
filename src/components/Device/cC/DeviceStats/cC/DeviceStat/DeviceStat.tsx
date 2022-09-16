import React from "react";
import {
  DeviceStatSC,
  StatContainerSC,
  StatNameSC,
  StatUnitSC,
  StatValueSC,
  StatsSC,
  FlexContainerSC,
  H2ContainerSC,
  HeaderSC,
} from "./StyledComponents";
import { DeviceObject } from "../../../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { Entities } from "../../../../../../utilFunctions/categorizeMeasurements/categorizeMeasurements";

export type Stat = {
  label: string;
  key: keyof Entities;
};

export type StatProps = {
  device: DeviceObject;
  header: string;
  stat1: Stat;
  stat2?: Stat;
  children?: React.ReactNode;
};

const DeviceStat = ({ device, header, stat1, stat2, children }: StatProps) => {
  return (
    <DeviceStatSC>
      <HeaderSC>{header}</HeaderSC>
      <FlexContainerSC>
        {stat1.label && device.entities[stat1.key] ? (
          <StatContainerSC
            color={device.entities[stat1.key]?.color || "#dcdcdc"}
          >
            <H2ContainerSC>
              <StatNameSC>{stat1?.label}</StatNameSC>
            </H2ContainerSC>
            <StatsSC>
              <StatValueSC>{device.entities[stat1.key].state}</StatValueSC>
              <StatUnitSC>
                {device.entities[stat1.key].unit_of_measurement}
              </StatUnitSC>
            </StatsSC>
          </StatContainerSC>
        ) : (
          <div>-</div>
        )}
        {stat2?.label && device.entities[stat2.key] && (
          <StatContainerSC color={device.entities[stat2.key]?.color || "gray"}>
            <H2ContainerSC>
              <StatNameSC>{stat2?.label}</StatNameSC>
            </H2ContainerSC>
            <StatsSC>
              <StatValueSC>{device.entities[stat2.key]?.state}</StatValueSC>
              <StatUnitSC>
                {device.entities[stat2.key]?.unit_of_measurement}
              </StatUnitSC>
            </StatsSC>
          </StatContainerSC>
        )}
      </FlexContainerSC>

      {children}
    </DeviceStatSC>
  );
};

export default DeviceStat;
