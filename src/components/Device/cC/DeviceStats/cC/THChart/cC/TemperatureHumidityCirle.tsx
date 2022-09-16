export type Circle = {
  x: number;
  y: number;
  size: number;
  fill: string;
  opacity: number;
  borderWidth: number;
  borderColor: string;
};

function TemperatureHumidityCircle({
  x,
  y,
  size,
  fill,
  opacity = 1,
  borderWidth = 1.5,
  borderColor = "transparent",
}: Circle) {
  return (
    <g>
      <circle
        fill="transparent"
        r={size * 2.5}
        cx={x + size / 2}
        cy={y + size / 2}
        strokeWidth={borderWidth}
        stroke={borderColor}
      />
      <circle
        r={size * 1.5}
        strokeWidth={borderWidth}
        stroke={borderColor}
        cx={x + size / 2}
        cy={y + size / 2}
        fill={fill}
        fillOpacity={1}
      />
    </g>
  );
}

export default TemperatureHumidityCircle;
