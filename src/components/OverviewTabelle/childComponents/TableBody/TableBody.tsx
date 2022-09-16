import React from "react";
import { useNavigate } from "react-router-dom";
import firstLetterToUpperCase from "../../../../utilFunctions/firstLetterToUppercase/firstLetterToUppercase";
import { DeviceObject } from "../../../../utilFunctions/entitiesObjectToArray/entitiesObjectToArray";
import { config } from "../../../../utils/urls";

import {
  TableBodySC,
  RowSC,
  FieldSC,
  FieldContentSC,
} from "./StyledComponents";
import { HoverPosition } from "../../OverviewTabelle";
import { Entity } from "../../../../utilFunctions/generateEntities/generateEntities";

export type TBProps = {
  devices: DeviceObject[];
  sortedData: () => DeviceObject[];
  showColors: boolean;
  setHoverPosition: React.Dispatch<React.SetStateAction<HoverPosition>>;
};

export type TableRowProps = {
  device: string;
  group: string;
  temperatur: number | string;
  luftfeuchtigkeit: number | string;
  luftdruck: number | string;
  co2: number | string;
  pm10: number | string;
  pm25: number | string;
};

const TableBody = ({
  devices,
  sortedData,
  showColors,
  setHoverPosition,
}: TBProps) => {
  let navigate = useNavigate();

  const handleMouseOver = (devicename: string, e: any) => {
    let y = e.currentTarget.offsetTop;
    setHoverPosition({ device: devicename, y });
    //console.log("event", e);
  };

  const handleMouseOut = () => {
    setHoverPosition((prevPosition) => ({ device: null, y: prevPosition.y }));
  };

  return (
    <TableBodySC>
      {devices &&
        sortedData().map((item, i) => {
          //console.log(item.device, item.luftdruck?.state ?? "-");
          let { group, entities, device } = item;
          let upperGroupName = group && firstLetterToUpperCase(group);

          let newTableRowObject: any = {
            device: device,
            group: upperGroupName ?? "-",
            temperatur: "-",
            luftfeuchtigkeit: "-",
            luftdruck: "-",
            co2: "-",
            pm10: "-",
            pm25: "-",
          };

          for (const [entity, value] of Object.entries(entities)) {
            newTableRowObject[entity] = value.state;
          }

          return (
            <RowSC
              key={`item-${i}`}
              onMouseOver={(e) => handleMouseOver(device, e)}
              onMouseOut={handleMouseOut}
              onClick={() => navigate(`${config.url}sensor/${device}`)}
            >
              {Object.keys(newTableRowObject).map((entity, i) => {
                return (
                  <FieldSC
                    key={i}
                    color={item.entities[entity]?.color}
                    showColors={showColors}
                  >
                    {newTableRowObject[entity]}
                    <FieldContentSC></FieldContentSC>
                  </FieldSC>
                );
              })}
            </RowSC>
          );
        })}
    </TableBodySC>
  );
};

export default TableBody;
