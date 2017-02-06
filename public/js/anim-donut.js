// /**
//  * Define data for each year
//  */
// var chartData = {
//     "1": [{
//         "name": "Charles"
//     }, {
//         "category": "Culture",
//         "total_score": 20
//     }, {
//         "category": "Tech",
//         "total_score": 20
//     }, {
//         "category": "Collector",
//         "total_score": 20
//     }, {
//         "category": "Fantasy",
//         "total_score": 10
//     }, {
//         "category": "Well-Rounded",
//         "total_score": 30
//     }],
//     "2": [{
//         "name": "Fiona"
//     }, {
//         "category": "Culture",
//         "total_score": 10
//     }, {
//         "category": "Tech",
//         "total_score": 50
//     }, {
//         "category": "Collector",
//         "total_score": 20
//     }, {
//         "category": "Fantasy",
//         "total_score": 15
//     }, {
//         "category": "Well-Rounded",
//         "total_score": 5
//     }],
//     "3": [{
//         "name": "Jessica"
//     }, {
//         "category": "Culture",
//         "total_score": 40
//     }, {
//         "category": "Tech",
//         "total_score": 20
//     }, {
//         "category": "Collector",
//         "total_score": 10
//     }, {
//         "category": "Fantasy",
//         "total_score": 20
//     }, {
//         "category": "Well-Rounded",
//         "total_score": 10
//     }],
//     "4": [{
//         "name": "Phil"
//     }, {
//         "category": "Culture",
//         "total_score": 50
//     }, {
//         "category": "Tech",
//         "total_score": 20
//     }, {
//         "category": "Collector",
//         "total_score": 10
//     }, {
//         "category": "Fantasy",
//         "total_score": 10
//     }, {
//         "category": "Well-Rounded",
//         "total_score": 10
//     }],
//     "5": [{
//         "name": "Mitali"
//     }, {
//         "category": "Culture",
//         "total_score": 5
//     }, {
//         "category": "Tech",
//         "total_score": 55
//     }, {
//         "category": "Collector",
//         "total_score": 20
//     }, {
//         "category": "Fantasy",
//         "total_score": 10
//     }, {
//         "category": "Well-Rounded",
//         "total_score": 10
//     }]
// };


function getData() {
    $.get("/aggregatescore", function(data) {

        var chartData = data;

        var size = Object.keys(chartData).length;

        console.log(size);

        /**
         * Create the chart
         */
        var currentPerson = 1;

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "theme": "dark",
            "dataProvider": [],
            "valueField": "total_score",
            "titleField": "category",
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

    });
}

getData();
