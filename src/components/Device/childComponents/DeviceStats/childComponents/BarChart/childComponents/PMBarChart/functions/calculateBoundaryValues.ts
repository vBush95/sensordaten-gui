const calculateBoundaryValues = (
  pm: number | string | undefined,
  limit: number[]
) => {
  let array = [];
  let pmValue: number;
  if (pm !== undefined) {
    pmValue = typeof pm === "string" ? parseFloat(pm) : pm;
    let sum = limit.reduce((pv, cv) => pv + cv, 0);
    if (pmValue > sum) {
      let remainingValue = Math.round((pmValue - sum) * 10) / 10;
      array.push(limit[0], limit[1], remainingValue);
    } else if (pmValue > limit[0]) {
      let remainingValue = Math.round((pmValue - limit[0]) * 10) / 10;
      array.push(limit[0], remainingValue, 0);
    } else {
      array.push(pmValue, 0, 0);
    }
  }
  return array;
};

export default calculateBoundaryValues;
