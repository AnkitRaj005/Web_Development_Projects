$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    function newDate() {
        return new Date().getFullYear();
    }

    // Corrected the way to set the innerHTML
    document.getElementById("autodate").innerHTML = newDate();
});