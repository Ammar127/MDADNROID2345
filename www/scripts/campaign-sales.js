(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        $(".js-notifications-count").text('12').addClass("badge animated bounceInDown");

        $(".det").on("click", function () {
            const eventId = $(this).data("event-id");
            console.log(eventId);
            location.href = "campaign-details.html";
        });
        $("#priv").on("click", function () {

            location.href = "passs.html";
        });
        $("#deal").on("click", function () {

            location.href = "Deal.html";
        });


        $(".header-light a:eq(1)").on("click", function () {
            location.href = "index.html";
        });
        $(".header-light a:eq(2)").on("click", function () {
            location.href = "notifications.html";
        });
        $(".header-light a:eq(3)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });
        $('i.lik').click(function(){
            $(this).toggleClass('fa-heart fa-heart-o');
        });

        $(".footer-links a:eq(0)").on("click", function () {
            location.href = "page-profile-2.html";
        });
        $(".footer-links a:eq(1)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });
        $(".footer-links a:eq(2)").on("click", function () {
            location.href = "terms-of-services.html";
        });
        $(".footer-links a:eq(3)").on("click", function () {
            location.href = "news-faq.html";
        });
    };

})();