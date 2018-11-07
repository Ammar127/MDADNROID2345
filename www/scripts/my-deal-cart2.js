(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        $(".js-notifications-count").text('12').addClass("badge animated bounceInDown");

        $(".header-light a:eq(1)").on("click", function () {
            location.href = "index.html";
        });
        $(".header-light a:eq(2)").on("click", function () {
            location.href = "notifications.html";
        });
        $(".header-light a:eq(3)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });
        $(".detail").on("click", function () {
            location.href = "tick.html";
        });

        $(".timeline-subheading").on("click", function () {
            location.href = "map.html";
        });
  $("#mapsa").on("click", function () {
            location.href = "map.html";
        });


        $(".cart-costs a:eq(0)").on("click", function () {
            location.href = "my-deals-cart-checkout.html";
        });
        $(".md1 a:eq(0)").on("click", function () {

            location.href = "thankyou.html";
        });
        $(".md a:eq(0)").on("click", function () {

            location.href = "index.html";
        });
        $(".md a:eq(1)").on("click", function () {

            location.href = "myorders.html";
        });
        $("#pri").on("click", function () {

            location.href = "privateEvent.html";
        });
    };

})();