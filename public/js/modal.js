$('#loginbtn').on('click', function() {

    $('#myModal').modal('show');

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
