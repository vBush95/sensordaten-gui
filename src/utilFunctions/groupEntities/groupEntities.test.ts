import { EntityInformation } from "./../groupEntities/groupEntities";
import { describe, expect, it } from "vitest";
import groupEntities from "./groupEntities";
import testEntitiesObject from "../../utils/testEntitiesObject";

describe("#groupEntities", () => {
  it("no entities provided", () => {
    let entitiesObject = groupEntities({});
    expect(Object.keys(entitiesObject).length).toBe(0);
  });

  describe("#groupEntities", () => {
    it("2 valid and 1 invalid entity provided", () => {
      let entitiesObject = groupEntities(testEntitiesObject);

      expect(Object.keys(entitiesObject).length).toBe(1);

      expect(entitiesObject).toHaveProperty("device0");

      for (const [device, value] of Object.entries(entitiesObject)) {
        expect([null, "obergeschoss"]).toContain(value.group);
      }

      let entitiesDevice0 = entitiesObject.device0.entities;
      for (const [entityKey, value] of Object.entries(entitiesDevice0)) {
        expect(value).toHaveProperty("unit_of_measurement");
        expect(value).toHaveProperty("state");
        expect(value).toHaveProperty("entity_id");
        expect(value).toHaveProperty("friendly_name");
        expect(value).toHaveProperty("last_updated");
      }
    });
  });
});
