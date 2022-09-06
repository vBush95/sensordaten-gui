import { describe, expect, it } from "vitest";
import { Entities } from "../utilFunctions/generateEntities";

import generateEntities from "../utilFunctions/generateEntities";
import exampleEntitiesObject from "../utils/exampleEntitiesObject";

interface CustomMatchers<R = unknown> {
  toBeWithinRange(floor: number, ceiling: number): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

describe("#generateEntities", () => {
  expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });

  it("numberOfEntities = 0 - object contains 0 keys", () => {
    let numberOfEntities = 0;
    let entities: Entities = generateEntities(
      exampleEntitiesObject,
      numberOfEntities
    );
    let length: number = Object.keys(entities).length;
    expect(length).toBe(0);
  });

  it("all entities have the correct name and properties", () => {
    let entities: Entities = generateEntities(exampleEntitiesObject, 15);
    for (const entity in entities) {
      const [entityType, name] = entity.split(".");
      if (entityType === "sensor") {
        expect(entities[entity]).toHaveProperty("attributes");
        // expect(entities[entity].attributes).toHaveProperty(
        //   "unit_of_measurement"
        // );

        let nameArray: number = name.split("_").length;
        expect(nameArray).toBeWithinRange(2, 3);
      } else {
        expect(entityType).toBe("invalidEntity");
      }
    }
  });
});
