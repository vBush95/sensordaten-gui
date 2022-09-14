import { Entities } from "../utilFunctions/generateEntities/generateEntities";

const testEntitiesObject: Entities = {
  "invalidEntity.temperaure_device1": {
    test: true,
  },
  "sensor.co2_device0_obergeschoss": {
    attributes: {
      device_class: "air",
      friendly_name: "co2 device0 obergeschoss",
      state_class: "measurement",
      unit_of_measurement: "ppm",
    },
    context: {
      id: null,
      parent_id: null,
      user_id: null,
    },
    entity_id: "sensor.co2_device0_obergeschoss",
    last_changed: new Date(),
    last_updated: new Date(),
    state: 1014,
  },
  "sensor.luftfeuchtigkeit_device0_obergeschoss": {
    attributes: {
      device_class: "air",
      friendly_name: "luftfeuchtigkeit device0 obergeschoss",
      state_class: "measurement",
      unit_of_measurement: "%",
    },
    context: {
      id: null,
      parent_id: null,
      user_id: null,
    },
    entity_id: "sensor.luftfeuchtigkeit_device0_obergeschoss",
    last_changed: new Date(),
    last_updated: new Date(),
    state: 50,
  },
};

export default testEntitiesObject;
