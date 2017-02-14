$.get('/cat', function(data) {

    var nerdType = data['0'].category;
    var nerdDiv = $('#nerd-category');
    var nerdTitle = $('#nerd-title');

    var nerdCategories = [{

        category: "CULTURE",
        answer: '<p>Friends sometimes tire of the way you burst into song at random moments, but there is no denying you bring creativity and zest for life to every gathering. While you may occasionally retire to your room to ruminate on the poetry of Rilke, your gregarious nature and love of beauty keep you from becoming too solitary.</p>',
        img: '',
        color: '#EA4335'
    }, {
        category: 'ENGINEERING',
        answer: 'You love ENGINEERING',
        imgsrc: 'assets/images/farley.gif',
        color: '#FBBC05'
    }, {
        category: 'MUSIC',
        answer: 'Band camp was the best summer of your life.  You were a Gleek both before and after it was cool.  By night you spin as your alter ego, DJ SkittleByte, but you can still shred on the tuba when the situation calls for it.',
        img: 'assets/images/farley.gif',
        color: '#34A853'
    }, {
        category: 'SCIENCE',
        answer: 'You garnish your fries with NaCl. You have a basement lab. You see the glass as completely full, half with liquid and half with air. Go forth, Science Nerd!',
        img: 'assets/images/farley.gif',
        color: '#800080'
    }, {
        category: 'TECHNOLOGY',
        answer: 'You refer to eating and drinking as "uploading", pay for your socks using Bitcoin, and know more IP addresses than phone numbers. Cute nerds want to date you, and your boss wants to BE you.',
        img: 'assets/images/farley.gif',
        color: '#4285F4'
    }];

    nerdTitle.html('You are a ' + nerdType + ' Nerd!');


    switch (nerdType) {
        case nerdCategories[0].category:

            nerdDiv.append(nerdCategories[0].answer);
            nerdTitle.css('color', nerdCategories[0].color);
            break;
        case nerdCategories[1].category:
            nerdDiv.append(nerdCategories[1].answer);
            nerdTitle.css('color', nerdCategories[1].color);
            break;
        case nerdCategories[2].category:
            nerdDiv.append(nerdCategories[2].answer);
            nerdTitle.css('color', nerdCategories[2].color);
            break;
        case nerdCategories[3].category:
            nerdDiv.append(nerdCategories[3].answer);
            nerdTitle.css('color', nerdCategories[3].color);
            break;
        case nerdCategories[4].category:
            nerdDiv.append(nerdCategories[4].answer);
            nerdTitle.css('color', nerdCategories[4].color);
            break;
        default:
            nerdDiv.html('You are an Original Nerd');
            nerdDiv.html("<h2>You are a whole new kind of nerd. Niiice!</h2>");
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

        "bandOutlineAlpha": 0,
        "bands": [{
            "color": "#fd1d02",
            "endValue": 100,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 80,
            "balloonText": "Master Nerd"
        }, {
            "color": "#ff4105",
            "endValue": 80,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 60,
            "balloonText": "Super Nerd"
        }, {
            "color": "#f8ff01",
            "endValue": 60,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 40,
            "balloonText": "Full-Blown Nerd"
        }, {
            "color": "#9dc707",
            "endValue": 40,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 20,
            "balloonText": "Intermediate Nerd"
        }, {
            "color": "#8ecfd5",
            "endValue": 20,
            "innerRadius": "105%",
            "radius": "170%",
            "startValue": 0,
            "balloonText": "Entry-Level Nerd"
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

$.get('/category/nerd', function(data) {

    var nerdLevel = data.nerd_level;
    var value = 0;
    switch (nerdLevel) {
        case "Entry Level Nerd":
            setNerdLevel(20);
            break;
        case "Intermediate Nerd":
            setNerdLevel(40);
            break;
        case "Full Blown Nerd":
            setNerdLevel(60);
            break;
        case "Super Nerd":
            setNerdLevel(80);
            break;
        case "Master Nerd":
            setNerdLevel(100);
            break;
        default:

            setInterval(randomValue, 2000);
    }

    function setNerdLevel(value) {
        chart.arrows[0].setValue(value);
        chart.axes[0].setTopText("Nerd Level: \n" + nerdLevel);

        console.log("cookie", getCookie('auth_token'));

        console.log("data", data.nerd_level);
    }



    // set random value
    function randomValue() {

        var value = Math.round(Math.random() * 100);

        chart.arrows[0].setValue(value);
        chart.axes[0].setTopText("You Broke the Nerd Meter!");

    }
});
