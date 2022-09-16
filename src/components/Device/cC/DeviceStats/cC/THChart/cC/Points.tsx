// @ts-nocheck

import React, { createElement } from "react";

import SymbolCircle from "./SymbolCircle";
import TemperatureHumidityCircle from "./TemperatureHumidityCirle";
import { Point } from "../../../../../../../utils/thresholdsForMeasurements";

function Points({ pointSize = 0, points }) {
  /**
   * We reverse the `points` array so that points from the lower lines in stacked lines
   * graph are drawn on top. See https://github.com/plouc/nivo/issues/1051.
   */
  const mappedPoints = points.map((point) => ({
    id: point.id,
    symbol: ["Messpunkt"].includes(`${point.serieId}`)
      ? TemperatureHumidityCircle
      : SymbolCircle,

    x: point.x - pointSize / 2,
    y: point.y - pointSize / 2,
    fill: point.color,
    borderColor: point.borderColor,
  }));

  return (
    <g>
      {mappedPoints.map(({ symbol, ...point }) =>
        createElement(symbol, { ...point, size: pointSize, key: point.id })
      )}
    </g>
  );
}

export default Points;
