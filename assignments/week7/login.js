$(document).ready(function () {

    $("#login").click(function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val()

        if (username === "student") {

            if(password === "1234") {
                console.log("Congratz, you are now logged in!")
                window.location.replace("http://www.yahoo.com")
            } else {
                console.log("Wrong password.")
            }
        } else {
            console.log("username is wrong.")
        }


    });




});

