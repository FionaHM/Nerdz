function getIndieData() {

    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
            xhr.setRequestHeader("Authorization", "Bearer " + getCookie('auth_token'));
        }
    });

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }


    $.get('/aggregatescore/user/', function(data) {

        var indieData = data["1"];

        var chart1 = AmCharts.makeChart("indie-chartdiv", {
            "type": "pie",
            "theme": "none",
            "dataProvider": indieData,
            "valueField": "total_score",
            "titleField": "category",
            "labelRadius": 5,
            "creditsPosition": "bottom-right",
            "labelTickColor": "#fff",
            "color": "fff",
            "colors": ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#800080", "#47a2fd"],
            "radius": "30%",
            "innerRadius": "60%",
            "marginTop": 30,
            "color": "#fff",
            "percentFormatter": {
                precision: 0,
                decimalSeparator: '.',
                thousandsSeparator: ','
            },
            "allLabels": [{
                "y": "54%",
                "align": "center",
                "size": 15,
                "bold": true,
                "text": indieData["0"].name,
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
    }).done(function(msg) {

    }).fail(function(xhr, status, error) {
        // captures error so now we can handle
        console.log(xhr.responseText, xhr.statusText);

    })

}

getIndieData();
