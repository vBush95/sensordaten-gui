export type Circle = {
  x: number;
  y: number;
  size: number;
  fill: string;
  opacity?: number | undefined;
  borderWidth?: number | undefined;
  borderColor?: string | undefined;
};

function SymbolCircle({
  x,
  y,
  size,
  fill,
  opacity = 1,
  borderWidth = 0,
  borderColor = "transparent",
}: Circle) {
  return (
    <circle
      r={size / 2}
      cx={x + size / 2}
      cy={y + size / 2}
      fill={fill}
      opacity={opacity}
      strokeWidth={borderWidth}
      stroke={borderColor}
      style={{
        pointerEvents: "none",
      }}
    />
  );
}

export default SymbolCircle;
