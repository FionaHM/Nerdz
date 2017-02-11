 var chart = AmCharts.makeChart("gauge-div", {
     "theme": "none",
     "type": "gauge",
     "axes": [{
         "topTextFontSize": 20,
         "topTextColor": "#fff",
         "topTextYOffset": 70,
         "axisColor": "#31d6ea",
         "axisThickness": 1,
         "endValue": 100,
         "gridInside": true,
         "inside": true,
         "radius": "60%",
         "valueInterval": 20,
         "tickColor": "#67b7dc",
         "startAngle": -90,
         "endAngle": 90,
         // "unit": "%",
         "bandOutlineAlpha": 0,
         "bands": [{
             "color": "#fd1d02",
             "endValue": 100,
             "innerRadius": "105%",
             "radius": "170%",
             // "gradientRatio": [0.5, 0, -0.5],
             "startValue": 80
         }, {
             "color": "#ff4105",
             "endValue": 80,
             "innerRadius": "105%",
             "radius": "170%",
             // "gradientRatio": [0.5, 0, -0.5],
             "startValue": 60
         }, {
             "color": "#f8ff01",
             "endValue": 60,
             "innerRadius": "105%",
             "radius": "170%",
             // "gradientRatio": [0.5, 0, -0.5],
             "startValue": 40
         }, {
             "color": "#9dc707",
             "endValue": 40,
             "innerRadius": "105%",
             "radius": "170%",
             // "gradientRatio": [0.5, 0, -0.5],
             "startValue": 20
         }, {
             "color": "#8ecfd5",
             "endValue": 20,
             "innerRadius": "105%",
             "radius": "170%",
             // "gradientRatio": [0.5, 0, -0.5],
             "startValue": 0
         }]
     }],
     "arrows": [{
         "alpha": 1,
         "innerRadius": "35%",
         "nailRadius": 0,
         "radius": "170%",
         "color": "#fff"
     }]
 });

 //test for nerd type and do stuff with it.
 setInterval(randomValue, 2000);

 // set random value
 function randomValue() {

     // var value = Math.round(Math.random() * 100);
     var value = 55;
     chart.arrows[0].setValue(value);
     chart.axes[0].setTopText("Your \n Overall \n Nerdiness: \n" + value);
     // adjust darker band to new value
     // chart.axes[0].bands[1].setEndValue(value);
 }
