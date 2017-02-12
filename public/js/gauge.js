$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
        xhr.setRequestHeader("Authorization", "Bearer " + getCookie('auth_token'));
    }
});

console.log("cookie", getCookie('auth_token'));

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



$.get('/category/nerd', function(data) {
    console.log("cookie", getCookie('auth_token'));

    console.log("data", data);

});

$.get('/cat', function(data) {

    var nerdType = data['0'].category;
    var nerdDiv = $('#nerd-category');
    var nerdTitle = $('#nerd-title');

    var nerdCategories = [{

        category: "CULTURE",
        answer: '<p>You are a Culture Nerd! Friends sometimes tire of the way you burst into song at random moments, but there is no denying you bring creativity and zest for life to every gathering. While you may occasionally retire to your room to ruminate on the poetry of Rilke, your gregarious nature and love of beauty keep you from becoming too solitary.</p>',
        img: '<img class="img-circle img-responsive" src="./img/band-nerd.png">',
        color: '#EA4335'
    }, {
        category: 'ENGINEERING',
        answer: 'You love ENGINEERING',
        imgsrc: 'assets/images/farley.gif',
        color: '#FBBC05'
    }, {
        category: 'MUSIC',
        answer: 'Maybe band camp was the best summer of your life.  Maybe you were a Gleek before it was cool.  Or maybe you moonlight on Saturdays as your alter ego, DJ SkittleByte. Either way, you are a hardcore Music Nerd, and you\'re not changing for anyone.',
        img: 'assets/images/farley.gif',
        color: '#34A853'
    }, {
        category: 'SCIENCE',
        answer: 'You love SCIENCE',
        img: 'assets/images/farley.gif',
        color: '#800080'
    }, {
        category: 'TECHNOLOGY',
        answer: 'You love technology',
        img: 'assets/images/farley.gif',
        color: '#4285F4'
    }];

    nerdTitle.html('You are a ' + nerdType + ' Nerd!');


    switch (nerdType) {
        case nerdCategories[0].category:
            nerdDiv.html(nerdCategories[0].answer);
            nerdTitle.css('color', nerdCategories[0].color);
            break;
        case nerdCategories[1].category:
            nerdDiv.html(nerdCategories[1].answer);
            nerdTitle.css('color', nerdCategories[1].color);
            break;
        case nerdCategories[2].category:
            nerdDiv.html(nerdCategories[2].answer);
            nerdTitle.css('color', nerdCategories[2].color);
            break;
        case nerdCategories[3].category:
            nerdDiv.html(nerdCategories[3].answer);
            nerdTitle.css('color', nerdCategories[3].color);
            break;
        case nerdCategories[4].category:
            nerdDiv.html(nerdCategories[4].answer);
            nerdTitle.css('color', nerdCategories[4].color);
            break;
        default:
            nerdDiv.html('You are an Original Nerd');
            nerdDiv.html("You are a whole new kind of nerd. Niiice!");
    }

});


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
