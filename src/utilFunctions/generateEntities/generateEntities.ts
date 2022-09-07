import { EntitiesConstructor } from "../../utils/exampleEntitiesObject";

type Entity = {
  attributes: {
    device_class: string;
    friendly_name: string;
    state_class: string;
    unit_of_measurement: string;
  };
  context: {
    id: null;
    parent_id: null;
    user_id: null;
  };
  entity_id: string;
  last_changed: Date;
  last_updated: Date;
  state: number | string;
};

type FalseEntity = {
  test: boolean;
};

export type Entities = {
  [key: string]: Entity | FalseEntity;
};

/**
 * returns an object containing entities randomly chosen from the object of type - EntitiesConstructor
 * @param exampleEntitiesObject Object that contains all possible sensors or groups to choose from
 * @param numberOfDevices number of devies to be created
 * @returns  Object containing valid and invalid entities
 */

const generateEntities = (
  { groups, sensors }: EntitiesConstructor,
  numberOfDevices: number
): Entities => {
  let entitiesObject: Entities = {};

  for (let i = 0; i < numberOfDevices; i++) {
    //device name
    let deviceName = `device${i}`;
    //generate valid and invalid entities
    let randomNumber = Math.random() * 10;
    let validEntity = randomNumber <= 3 ? false : true;
    //console.log("validEntity", validEntity);

    if (!validEntity) {
      // if the entity is invalid, it does not start with sensors.*
      let invalidEntityName = `invalidEntity.temperature_device${i}`;
      entitiesObject[invalidEntityName] = { test: true };
    } else {
      // assign random group
      const randomGroup = groups[Math.floor(Math.random() * groups.length)];
      // select random sensors of different categories - some include null
      let randomSensors = [];
      for (let i = 0; i < sensors.length; i++) {
        let randomSensor =
          sensors[i][Math.floor(Math.random() * sensors[i].length)];
        if (randomSensor != null) {
          randomSensors.push(randomSensor);
        }
      }

      //console.log("randomSensors", randomSensors);
      //generate correct string Names from the randomly selected sensors and group
      const entityObjects = randomSensors.map((sensor) => {
        let entityObject = sensor.messwerte.map((messwert) => {
          //append the group if not null
          let dashGroup = randomGroup ? `_${randomGroup}` : "";
          //combine the measurement name with the device and group
          let stringName = `sensor.${messwert.name}_${deviceName}${dashGroup}`;
          // return the new string together with all other sensor keys for further use
          return { ...messwert, stringName };
        });
        return entityObject;
      });
      //console.log("entityStringNames", entityObjects);

      // some sensors measure more than one state like temperature and humidity and have more than 1 sensor per device
      // the loop adds one entity object for every entry in entityObjects
      for (let i = 0; i < entityObjects.length; i++) {
        for (let j = 0; j < entityObjects[i].length; j++) {
          // ebject containing all measurement information and string name
          let entity = entityObjects[i][j];
          // generate random number between defined range
          let entityState = Math.floor(
            entity.range[0] +
              (entity.range[1] - entity.range[0]) * Math.random()
          );
          // form friendly name by splitting the sensors.*_*_* string by . followed by replacing the _ by empty spaces
          let entityString = entity.stringName.split(".");
          let entityFriendlyName = entityString[1].replace(/_/gi, " ");
          //console.log("entityFriendlyName", entityFriendlyName);

          //add a new key with the correctly formatted entity name to the entitiesObject including all other keys returned form the original home assistant websocket
          entitiesObject[entity.stringName] = {
            attributes: {
              device_class: entity.device_class,
              friendly_name: entityFriendlyName,
              state_class: entity.state_class,
              unit_of_measurement: entity.unit_of_measurement,
            },
            context: {
              id: null,
              parent_id: null,
              user_id: null,
            },
            entity_id: entity.stringName,
            last_changed: new Date(),
            last_updated: new Date(),
            state: entityState,
          };
        }
      }
    }
  }
  return entitiesObject;
};

export default generateEntities;
