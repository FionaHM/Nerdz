$("#logout").on("click", function() {
    // logout
    console.log("testsett");
    delete_cookie("auth_token", null);
    console.log("token", getCookie("auth_token"));
    if (getCookie("auth_token") === "") {
        $("#logout").hide();
        var message = "Successfully logged out - please close your browser."
        console.log(message);
        // go back to the base login page
        window.location.replace("/");

    }

});

$("#logout2").on("click", function() {
    // logout
    console.log("testsett");
    delete_cookie("auth_token", null);
    console.log("token", getCookie("auth_token"));
    if (getCookie("auth_token") === "") {
        $("#logout").hide();
        var message = "Successfully logged out - please close your browser."
        console.log(message);
        // go back to the base login page
        window.location.replace("/");

    }

});

function delete_cookie(name, value) {
    // document.cookie = name + "=" + value + expires + "; path=/";
    document.cookie = name + "=" + value + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

// copied from stackoverflow.com
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

$('.dropdown-toggle').dropdown();
