var data = [{
    "name": "Lewis"
}, {
    "title": "Culture Nerd",
    "value": 20
}, {
    "title": "Tech Nerd",
    "value": 13
}, {
    "title": "Collector Nerd",
    "value": 15
}, {
    "title": "Fantasy Nerd",
    "value": 4
}, {
    "title": "Well-Rounded Nerd",
    "value": 10
}];

var chart1 = AmCharts.makeChart("indie-chartdiv", {
    "type": "pie",
    "theme": "dark",
    "dataProvider": data,
    "valueField": "value",
    "titleField": "title",
    "labelRadius": 5,

    "radius": "30%",
    "innerRadius": "60%",
    "marginTop": 30,
    "allLabels": [{
        "y": "54%",
        "align": "center",
        "size": 25,
        "bold": true,
        "text": "You",
        "color": "#fff"
    }, {
        "y": "49%",
        "align": "center",
        "size": 15,
        "text": "Nerd:",
        "color": "#fff"
    }],
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
});
