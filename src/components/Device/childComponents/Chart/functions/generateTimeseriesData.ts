import { DataParams } from "./../DemoChart";
export type Point = {
  x: string;
  y: number;
};

const generateTimeseriesData = (dataParams: DataParams): Point[] => {
  let timeseriesDataArray: Point[] = [];

  let {
    period: millisecondsInThePast,
    points: numberOfPoints,
    timeframe: aggregateTimeframeMilliseconds,
  } = paramsIntoMillimeters(dataParams.start, dataParams.aggregate_timeframe);

  let previousYValues: number[] = [];
  let sumOfPrevValues: number = 0;
  for (let i = numberOfPoints; i >= 0; i--) {
    let { dateString, dateNumber } = getFormattedDate(
      i,
      aggregateTimeframeMilliseconds
    );

    let [yValue, sumPrevValues] = calculateYValue(
      dateNumber,
      previousYValues,
      sumOfPrevValues,
      dataParams.baseline
    );
    previousYValues.push(yValue);
    sumOfPrevValues = sumPrevValues;

    let point = {
      x: dateString,
      y: yValue,
    };
    timeseriesDataArray.push(point);
  }

  return timeseriesDataArray;
};

export default generateTimeseriesData;

const getFormattedDate = (
  index: number,
  time: number
): { dateString: string; dateNumber: number } => {
  let timeInPast = index * time;

  // currentDate is a value in milliseconds -> the current date minus (i * 900_000)
  //  returns dates in the past by subtracting 15 minutes * i from the current time
  let currentDate = Date.now();
  let xDate = new Date(currentDate - timeInPast);
  let xDateNumber = xDate.getTime();
  let xDateString = xDate.toISOString();
  let splitTime = xDateString.split(".");
  let xDateCorrectFormat = splitTime[1] ? `${splitTime[0]}Z` : splitTime[0];

  return { dateString: xDateCorrectFormat, dateNumber: xDateNumber };
};

const paramsIntoMillimeters = (
  period: string,
  aggregateTimeframe: string
): { [key: string]: number } => {
  let periodInMilliseconds = timeStringToMilliseconds(period);
  let aggTimeframeInMilliseconds = timeStringToMilliseconds(aggregateTimeframe);
  let numberOfPoints = Math.floor(
    periodInMilliseconds / aggTimeframeInMilliseconds
  );

  return {
    period: periodInMilliseconds,
    timeframe: aggTimeframeInMilliseconds,
    points: numberOfPoints,
  };
};

const timeStringToMilliseconds = (time: string): number => {
  let [numberAsString, letter] = time.includes("m")
    ? [time.substring(0, time.indexOf("m")), "m"]
    : time.includes("h")
    ? [time.substring(0, time.indexOf("h")), "h"]
    : time.includes("d")
    ? [time.substring(0, time.indexOf("d")), "d"]
    : [null, ""];

  let millisecondsInTimeframe =
    letter === "m"
      ? 60_000
      : letter === "h"
      ? 3_600_000
      : letter === "d"
      ? 86_400_000
      : 0;

  if (numberAsString) {
    let milliseconds = parseFloat(numberAsString) * millisecondsInTimeframe;

    return milliseconds;
  } else {
    return 0;
  }
};

const calculateYValue = (
  date: number,
  prevYValues: number[],
  sumOldPrevValues: number,
  baseline: number
): [number, number] => {
  let millisecondsInADay = 86_400_000;
  let millisecondsInAYear = millisecondsInADay * 365;

  //the date value minus 7_000_000_000 milliseconds to move the sinus curve to have its maximum in june, july
  let currentdate = date - 7_030_000_000;
  // returns a number between 0 and 2*PI --- the current date in milliseconds modulo the milliseconds in a year devided by the milliseconds in a year equals a number between 0 and 1
  let yearlyYValue = sinusFunction(currentdate, millisecondsInAYear);

  let millisecondsInAMonth = millisecondsInADay * 60;
  let monthlyYValue = sinusFunction(currentdate, millisecondsInAMonth);

  let dailyYValue = sinusFunction(currentdate, millisecondsInADay);

  let randomValue: number = 0;
  let sumOfPrevValues: number = 0;
  let range = 2;
  if (prevYValues.length > 0) {
    // sum the last x elements of the prevValues
    let numberOfPrevValues = 5;
    sumOfPrevValues = prevYValues
      .slice(-numberOfPrevValues)
      .reduce((a, b) => a + b);
    if (prevYValues.length > 10) {
      randomValue =
        Math.random() > 0.2
          ? (sumOfPrevValues - sumOldPrevValues) * Math.random() * 0.3
          : Math.random() * range - range / 2;
    } else {
      randomValue = Math.random() * range - range / 2;
    }
  } else {
    randomValue = Math.random() * range - range / 2;
  }

  let yValue = combinePartialValues(
    baseline,
    yearlyYValue,
    monthlyYValue,
    dailyYValue,
    randomValue
  );
  return [yValue, sumOfPrevValues];
};

const sinusFunction = (date: number, milliseconds: number): number => {
  let remainder = ((date % milliseconds) / milliseconds) * 2 * Math.PI;
  let partialYValue = Math.sin(remainder);
  return partialYValue;
};

const combinePartialValues = (
  baseline: number,
  yearlyValue: number,
  monthlyValue: number,
  dailyValue: number,
  randomValue: number
) => {
  let combinedValue =
    Math.round(
      (baseline +
        yearlyValue * 10 +
        monthlyValue * 3 +
        dailyValue +
        randomValue) *
        100
    ) / 100;

  return combinedValue;
};
