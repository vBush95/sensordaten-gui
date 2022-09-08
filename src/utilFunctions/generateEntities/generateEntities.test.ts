import { describe, expect, it } from "vitest";
import { Entities } from "./generateEntities";

import generateEntities from "./generateEntities";
import exampleEntitiesObject from "../../utils/exampleEntitiesObject";

describe("#generateEntities", () => {
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
        expect(nameArray).toBeGreaterThanOrEqual(2);
        expect(nameArray).toBeLessThan(4);
      } else {
        expect(entityType).toBe("invalidEntity");
      }
    }
  });

  it.todo("test other stuff");
});
