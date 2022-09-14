import { describe, expect, it } from "vitest";
import firstLetterToUpperCase from "./firstLetterToUppercase";

describe("#firstLetterToUppercase", () => {
  it("no string provided", () => {
    let string = firstLetterToUpperCase("");
    expect(string).toBe(null);
  });

  it("string provided", () => {
    let string = firstLetterToUpperCase("wohnzimmer");
    expect(string).toBe("Wohnzimmer");
  });

  it("string is uppercase", () => {
    let string = firstLetterToUpperCase("WOHNZIMMER");
    expect(string).toBe("Wohnzimmer");
  });
});
