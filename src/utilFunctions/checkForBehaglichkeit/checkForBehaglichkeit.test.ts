import { describe, expect, it } from "vitest";
import checkForBehaglichkeit from "./checkForBehaglichkeit";
import thresholdsForMeasurements from "../../utils/thresholdsForMeasurements";

describe("#checkForBehaglichkeit", () => {
  it("behaglich", () => {
    let checkValue = checkForBehaglichkeit(21, 50, thresholdsForMeasurements);

    expect(checkValue.text).toBe("behaglich");
  });

  it("noch behaglich", () => {
    let checkValue = checkForBehaglichkeit(21, 25, thresholdsForMeasurements);

    expect(checkValue.text).toBe("noch behaglich");
  });

  it("nicht behaglich", () => {
    let checkValue = checkForBehaglichkeit(21, 15, thresholdsForMeasurements);

    expect(checkValue.text).toBe("nicht behaglich");
  });
});
