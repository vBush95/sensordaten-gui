import classifyPoint from "robust-point-in-polygon";
import { ValueSC } from "../../components/Device/childComponents/DeviceStats/childComponents/THChart/StyledComponents";
import { Entities, Entity } from "../generateEntities/generateEntities";

export type EntityInformation = {
  state: number | "unknown" | undefined | string;
  unit_of_measurement: string | undefined;
  last_updated: Date | undefined | string;
  entity_id: string | undefined;
  friendly_name: string | undefined;
};

export type DeviceProperties = {
  entities: {
    [key: string]: EntityInformation;
  };
  group: string | null;
};

export type DevicesObject = {
  [key: string]: DeviceProperties;
};

/**
 * The entities have to be sorted and reassembled as a new object - all entities belonging to the same device have to be grouped
 * @param entities Object containing valid and invalid entities
 * @returns  returns an object containing all entities grouped by device
 */

const groupEntities = (entities: Entities): DevicesObject => {
  let sortedEntitiesObject: DevicesObject = {};
  for (const [entity, values] of Object.entries(entities)) {
    // check if entity is a sensor -- starts with sensor.
    let splitName = entity.split(".");
    let entityTypeIsSensor = splitName[0] === "sensor" ? true : false;
    // if ("state" in values) {
    if (entityTypeIsSensor && "state" in values) {
      let [measurement, name, group] = splitName[1].split("_");
      //console.log("name", name);
      if (name) {
        //let deviceAlreadyExists = sortedEntitiesObject.hasOwnProperty(name);
        let stateValue =
          typeof values.state === "string"
            ? parseFloat(values.state)
            : values.state;
        let newEntityObject: EntityInformation = {
          state: stateValue,
          unit_of_measurement: values.attributes.unit_of_measurement,
          last_updated: values.last_updated,
          entity_id: splitName[1],
          friendly_name: values.attributes.friendly_name,
        };

        if (name in sortedEntitiesObject) {
          let existingProperties = sortedEntitiesObject[name];
          sortedEntitiesObject[name] = {
            ...existingProperties,
            entities: {
              ...existingProperties.entities,
              [measurement]: newEntityObject,
            },
          };
        } else {
          // let newDeviceKey = {
          //   [measurement]: newEntityObject,
          //   group: group ? group : null,
          // };
          // Object.assign(sortedEntitiesObject, newDeviceKey);
          sortedEntitiesObject[name] = {
            entities: {
              [measurement]: newEntityObject,
            },
            group: group ? group : null,
          };
        }
      }
    }
  }
  //console.log("sortedEntitieObject", sortedEntitiesObject);
  return sortedEntitiesObject;
};

export default groupEntities;
