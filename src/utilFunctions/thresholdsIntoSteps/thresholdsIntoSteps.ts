const thresholdsIntoSteps = (limits: number[]): number[] => {
  let secondStep = limits[1] - limits[0];
  let steps = [limits[0], secondStep];
  return steps;
};

export default thresholdsIntoSteps;
