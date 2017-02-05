var chart = AmCharts.makeChart("gauge-div", {
    "theme": "chalk",
    "type": "gauge",
    "axes": [{
        "topTextFontSize": 20,
        "topTextYOffset": 70,
        "axisColor": "#31d6ea",
        "axisThickness": 1,
        "endValue": 100,
        "gridInside": true,
        "inside": true,
        "radius": "60%",
        "valueInterval": 10,
        "tickColor": "#67b7dc",
        "startAngle": -90,
        "endAngle": 90,
        "unit": "%",
        "bandOutlineAlpha": 0,
        "bands": [{
            "color": "#0080ff",
            "endValue": 100,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0.5, 0, -0.5],
            "startValue": 0
        }, {
            "color": "#3cd3a3",
            "endValue": 0,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0.5, 0, -0.5],
            "startValue": 0
        }]
    }],
    "arrows": [{
        "alpha": 1,
        "innerRadius": "35%",
        "nailRadius": 0,
        "radius": "170%"
    }]
});


setInterval(randomValue, 2000);

// set random value
function randomValue() {
    var value = Math.round(Math.random() * 100);
    chart.arrows[0].setValue(value);
    chart.axes[0].setTopText("Your \n Overall \n Nerdiness: \n" + value + " %");
    // adjust darker band to new value
    chart.axes[0].bands[1].setEndValue(value);
}
