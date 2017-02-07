var indieData = [{
    "name": "Lewis",
    "location": ""
}, {
    "title": "Culture",
    "value": 20
}, {
    "title": "Tech",
    "value": 13
}, {
    "title": "Collector",
    "value": 15
}, {
    "title": "Fantasy",
    "value": 4
}, {
    "title": "Well-Rounded",
    "value": 10
}];


function getIndieData() {

    $.get('/aggregatescore/user/:id', function(data) {

        var indieData = data;

        console.log(indieData);
        console.log(indieData.length);
    })

}

getIndieData();

var chart1 = AmCharts.makeChart("indie-chartdiv", {
    "type": "pie",
    "theme": "dark",
    "dataProvider": indieData,
    "valueField": "value",
    "titleField": "title",
    "labelRadius": 5,

    "radius": "30%",
    "innerRadius": "60%",
    "marginTop": 30,
    "percentFormatter": {
        precision: 0,
        decimalSeparator: '.',
        thousandsSeparator: ','
    },
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
