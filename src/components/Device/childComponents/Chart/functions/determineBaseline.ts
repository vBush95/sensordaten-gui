export const determineBaseline = (
  unitOfMeasurement: string | undefined
): number => {
  let baseline: number = 0;
  if (unitOfMeasurement !== undefined) {
    baseline =
      unitOfMeasurement === "%"
        ? 50
        : unitOfMeasurement === "ppm"
        ? 500
        : unitOfMeasurement === "°C"
        ? 15
        : unitOfMeasurement === "hPa"
        ? 1000
        : unitOfMeasurement === "µg/m³"
        ? 10
        : 0;
  }
  return baseline;
};
