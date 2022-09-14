import { describe, expect, it } from "vitest";
import categorizeMeasurements from "./categorizeMeasurements";
import testDevicesObject from "../../utils/testDevicesObject";
import thresholdsForMeasurements from "../../utils/thresholdsForMeasurements";

describe("#categorizeMeasurements", () => {
  it("test with valid entities", () => {
    let test = categorizeMeasurements(
      testDevicesObject.device1,
      thresholdsForMeasurements
    );

    for (const [entity, values] of Object.entries(test.entities)) {
      expect(values).toHaveProperty("text");
      expect(values).toHaveProperty("color");
    }
  });
});
