function getData() {
    $.get("/aggregatescore", function(data) {

        var chartData = data;

        var size = Object.keys(chartData).length;

        /**
         * Create the chart
         */
        var currentPerson = 1;

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "theme": "none",
            "dataProvider": [],
            "valueField": "total_score",
            "titleField": "category",
            "creditsPosition": "bottom-right",
            "startDuration": 0,
            "innerRadius": "60%",
            "radius": "30%",
            "pullOutRadius": 20,
            "marginTop": 30,
            "labelTickColor": "#fff",
            "percentFormatter": {
                precision: 0,
                decimalSeparator: '.',
                thousandsSeparator: ','
            },
            "color": "#fff",
            "colors": ["#3120fc", "#EA4335", "#FBBC05", "#34A853", "#800080", "#47a2fd"],
            "allLabels": [{
                "y": "54%",
                "align": "center",
                "size": 15,
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
                                setTimeout(loop, 500);
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

    });
}

getData();
