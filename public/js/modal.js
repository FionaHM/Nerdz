$('#loginbtn').on('click', function() {

    $('#myModal').modal('show');

});

var stops = [25, 55, 85, 95];
$.each(stops, function(index, value) {
    setTimeout(function() {
        $(".progress-bar").css("width", value + "%").attr("aria-valuenow", value);
    }, index * 1500);
});



//need some logic here to make sure recovery is successful before closing modal
$('#resetpassword').on('click', function() {

    $('.forget-modal').modal('hide');

});


function showPassword() {

    var key_attr = $('#key').attr('type');

    if (key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');

    }

}

$('.dropdown-toggle').dropdown();
