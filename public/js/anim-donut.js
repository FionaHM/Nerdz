/**
 * Define data for each year
 */
var chartData = {
    "1": [{
        "name": "Charles"
    }, {
        "title": "Culture",
        "value": 20
    }, {
        "title": "Tech",
        "value": 20
    }, {
        "title": "Collector",
        "value": 20
    }, {
        "title": "Fantasy",
        "value": 10
    }, {
        "title": "Well-Rounded",
        "value": 30
    }],
    "2": [{
        "name": "Fiona"
    }, {
        "title": "Culture",
        "value": 10
    }, {
        "title": "Tech",
        "value": 50
    }, {
        "title": "Collector",
        "value": 20
    }, {
        "title": "Fantasy",
        "value": 15
    }, {
        "title": "Well-Rounded",
        "value": 5
    }],
    "3": [{
        "name": "Jessica"
    }, {
        "title": "Culture",
        "value": 40
    }, {
        "title": "Tech",
        "value": 20
    }, {
        "title": "Collector",
        "value": 10
    }, {
        "title": "Fantasy",
        "value": 20
    }, {
        "title": "Well-Rounded",
        "value": 10
    }],
    "4": [{
        "name": "Phil"
    }, {
        "title": "Culture",
        "value": 50
    }, {
        "title": "Tech",
        "value": 20
    }, {
        "title": "Collector",
        "value": 10
    }, {
        "title": "Fantasy",
        "value": 10
    }, {
        "title": "Well-Rounded",
        "value": 10
    }],
    "5": [{
        "name": "Mitali"
    }, {
        "title": "Culture",
        "value": 5
    }, {
        "title": "Tech",
        "value": 55
    }, {
        "title": "Collector",
        "value": 20
    }, {
        "title": "Fantasy",
        "value": 10
    }, {
        "title": "Well-Rounded",
        "value": 10
    }]
};

var size = Object.keys(chartData).length;

/**
 * Create the chart
 */
var currentPerson = 1;

var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "theme": "dark",
    "dataProvider": [],
    "valueField": "value",
    "titleField": "title",
    "startDuration": 0,
    "innerRadius": "60%",
    "radius": "30%",
    "pullOutRadius": 20,
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
        "text": "1",
        "color": "#fff"
    }, {
        "y": "49%",
        "align": "center",
        "size": 15,
        "text": "Nerd:",
        "color": "#fff"
    }],
    "listeners": [{
        "event": "init",
        "method": function(e) {
            var chart = e.chart;

            function getCurrentData() {
                var data = chartData[currentPerson];

                currentPerson++;
                if (currentPerson > size)
                    currentPerson = 1;
                return data;
            }

            function loop() {
                currentPersonLabel = chartData[currentPerson]["0"].name;
                chart.allLabels[0].text = currentPersonLabel;
                var data = getCurrentData();
                chart.animateData(data, {
                    duration: 1000,
                    complete: function() {
                        setTimeout(loop, 3000);
                    }
                });
            }

            loop();
        }
    }],
    "export": {
        "enabled": true
    }
});
