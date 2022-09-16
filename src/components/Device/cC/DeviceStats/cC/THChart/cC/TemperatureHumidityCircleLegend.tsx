export type CircleLegend = {
  x: number;
  y: number;
  size: number;
  fill: string;
};

function TemperatureHumidityCircleLegend({ x, y, size, fill }: CircleLegend) {
  return (
    <g>
      <circle
        fill="transparent"
        r={size * 2.5}
        cx={x + size / 2}
        cy={y + size / 2}
        strokeWidth={1.5}
        stroke={"#212529"}
      />
      <circle
        r={size * 1.5}
        strokeWidth={1.5}
        stroke={"#212529"}
        cx={x + size / 2}
        cy={y + size / 2}
        fill={fill}
        fillOpacity={1}
      />
    </g>
  );
}

export default TemperatureHumidityCircleLegend;
