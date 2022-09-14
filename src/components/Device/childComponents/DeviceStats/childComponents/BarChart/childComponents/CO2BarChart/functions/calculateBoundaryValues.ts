const calculateBoundaryValues = (
  value: number | string | undefined,
  limit: number[]
) => {
  let array = [];
  let newValue: number;
  if (value !== undefined) {
    newValue = typeof value === "string" ? parseFloat(value) : value;
    let sum = limit.reduce((pv, cv) => pv + cv, 0);
    if (newValue > sum) {
      let remainingValue = Math.round((newValue - sum) * 10) / 10;
      array.push(limit[0], limit[1], remainingValue);
    } else if (newValue > limit[0]) {
      let remainingValue = Math.round((newValue - limit[0]) * 10) / 10;
      array.push(limit[0], remainingValue, 0);
    } else {
      array.push(newValue, 0, 0);
    }
  }
  return array;
};

export default calculateBoundaryValues;
