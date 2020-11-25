export const graphConfig = {
  axes: {
    x: {
      axisLabelFormatter: function (x) {
        return x.toPrecision(2);
      },
      pixelsPerLabel: 30,
    },
    y: {
      axisLabelFormatter: function (y) {
        return y.toPrecision(4);
      },
    },
  },
  width: 600,
  height: 400,
  rightGap: 50,
  digitsAfterDecimal: 4,
  xRangePad: 10,
  stepPlot: true,
};

export default { graphConfig };
