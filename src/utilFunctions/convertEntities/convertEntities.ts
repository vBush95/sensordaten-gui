import { classifyPoint } from "robust-point-in-polygon";
import { Entities, Entity } from "../generateEntities/generateEntities";

export type EntityInformation = {
  state: number | string;
  unit_of_measurement: string;
  last_updated: Date;
  entity_id: string;
  friendly_name: string;
};

export type Device = {
  [key: string]: EntityInformation | null | string;
  group: string | null;
};

export type SortedEntities = {
  [key: string]: Device;
};

/**
 * The entities have to be sorted and reassembled as a new object - all entities belonging to the same device have to be grouped
 * @param entities Object containing valid and invalid entities
 * @returns  returns an object containing all entities grouped by device
 */

const convertEntities = (entities: Entities): SortedEntities => {
  let sortedEntitiesObject: SortedEntities = {};
  //console.log("inside convert entites", entities);
  for (const [entity, values] of Object.entries(entities)) {
    // check if entity is a sensor -- starts with sensor.
    let splitName = entity.split(".");
    //let entityTypeIsSensor = splitName[0] === "sensor" ? true : false;
    //if (entityTypeIsSensor) {
    if ("state" in values) {
      let [measurement, name, group] = splitName[1].split("_");
      //console.log("name", name);
      if (name) {
        //let deviceAlreadyExists = sortedEntitiesObject.hasOwnProperty(name);
        let newEntityObject = {
          state: values.state,
          unit_of_measurement: values.attributes.unit_of_measurement,
          last_updated: values.last_updated,
          entity_id: splitName[1],
          friendly_name: values.attributes.friendly_name,
        };

        if (name in sortedEntitiesObject) {
          let existingProperties = sortedEntitiesObject[name];
          sortedEntitiesObject[name] = {
            ...existingProperties,
            [measurement]: newEntityObject,
          };
        } else {
          sortedEntitiesObject[name] = {
            [measurement]: newEntityObject,
            group: group ? group : null,
          };
        }
      }
    }
  }
  //console.log("sortedEntitieObject", sortedEntitiesObject);
  return sortedEntitiesObject;
};

export default convertEntities;
