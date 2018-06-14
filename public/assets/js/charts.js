/*********************************
*   Start of Liquid Fill Gauges  *
******************************** */

// Start of Gauge CSS and Animation Code (Edit Here to change colors and animation settings)
d3.select("#fillgauge1").call(d3.liquidfillgauge, 55);

d3.select("#fillgauge4").call(d3.liquidfillgauge, 50, {
  circleColor: "#FF7777",
  textColor: "#FF4444",
  waveTextColor: "#FFAAAA",
  waveColor: "#FFDDDD",
  textVertPosition: 0.8,
  waveAnimateTime: 1000,
  waveHeight: 0.05,
  waveAnimate: true,
  waveRise: false,
  waveOffset: 0.25,
  textSize: 0.75,
  waveCount: 3
});
d3.select("#fillgauge5").call(d3.liquidfillgauge, 60.44, {
  circleThickness: 0.15,
  circleColor: "#FF7777",
  textColor: "#FF4444",
  waveTextColor: "#FFAAAA",
  waveColor: "#FFDDDD",
  textVertPosition: 0.8,
  waveAnimateTime: 1000,
  waveHeight: 0.05,
  waveAnimate: true,
  waveRise: false,
  waveOffset: 0.25,
  textSize: 0.75,
  waveCount: 3
});

/*********************************
*  Start of Morris Donut Chart   *
******************************** */

Morris.Donut({
    element: 'donut-chart',
    // Array that holds info for values and categories
    data: [
      {label: "Employees", value: 30},
      {label: "Rent", value: 15},
      {label: "Supplies", value: 45},
      {label: "Miscellaneous", value: 10}
    ],
    // Change Color or inside Text
    labelColor: '#060',
    // Change Colors of each Bar
    colors: [
      '#0BA462',
      '#39B580',
      '#67C69D',
      '#95D7BB'
      ]
  });