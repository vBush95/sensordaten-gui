import { DevicesObject } from "../utilFunctions/groupEntities/groupEntities";

const testDevicesObject: DevicesObject = {
  device1: {
    group: null,
    entities: {
      luftfeuchtigkeit: {
        entity_id: "luftfeuchtigkeit_device1",
        friendly_name: "luftfeuchtigkeit device1",
        last_updated: new Date(),
        state: 45,
        unit_of_measurement: "%",
      },
      temperatur: {
        entity_id: "temperatur_device1",
        friendly_name: "temperatur device1",
        last_updated: new Date(),
        state: 25,
        unit_of_measurement: "°C",
      },
      co2: {
        entity_id: "co2_device1",
        friendly_name: "co2 device1",
        last_updated: new Date(),
        state: 512,
        unit_of_measurement: "ppm",
      },
      pm10: {
        entity_id: "pm10_device1",
        friendly_name: "pm10 device1",
        last_updated: new Date(),
        state: 2,
        unit_of_measurement: "µg/m³",
      },
      pm25: {
        entity_id: "pm25_device1",
        friendly_name: "pm25 device1",
        last_updated: new Date(),
        state: 7.3,
        unit_of_measurement: "µg/m³",
      },
    },
  },
  device2: {
    group: "obergeschoss",
    entities: {
      luftfeuchtigkeit: {
        entity_id: "luftfeuchtigkeit_device1",
        friendly_name: "luftfeuchtigkeit device1",
        last_updated: new Date(),
        state: 45,
        unit_of_measurement: "%",
      },
      temperatur: {
        entity_id: "temperatur_device1",
        friendly_name: "temperatur device1",
        last_updated: new Date(),
        state: 25,
        unit_of_measurement: "°C",
      },
      co2: {
        entity_id: "co2_device1",
        friendly_name: "co2 device1",
        last_updated: new Date(),
        state: 512,
        unit_of_measurement: "ppm",
      },
      pm10: {
        entity_id: "pm10_device1",
        friendly_name: "pm10 device1",
        last_updated: new Date(),
        state: 2,
        unit_of_measurement: "µg/m³",
      },
      pm25: {
        entity_id: "pm25_device1",
        friendly_name: "pm25 device1",
        last_updated: new Date(),
        state: 7.3,
        unit_of_measurement: "µg/m³",
      },
    },
  },
};

export default testDevicesObject;
