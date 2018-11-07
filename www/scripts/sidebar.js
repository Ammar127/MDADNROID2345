(function () {
    "use strict";

    var url = 'http://cypherlab.net/api/';

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {


        $(".sidebar-menu a:eq(0)").on("click", function () { // Home
            location.href = "index.html";
        });
        $(".sidebar-menu a:eq(1)").on("click", function () { // Profile
            location.href = "page-profile-2.html";
        });

        $(".sidebar-menu a:eq(2)").on("click", function () { // My Deals Cart
            location.href = "my-deals-cart2.html";
        });
        $(".sidebar-menu a:eq(3)").on("click", function () { // My Orders

            location.href = "myorders.html";
        });


        $(".sidebar-menu a:eq(4)").on("click", function () { // WishList
            location.href = "wishlist.html";
        });
        $(".sidebar-menu a:eq(5)").on("click", function () { // Conatact
            location.href = "page-contact.html";
        });
        $(".sidebar-menu a:eq(6)").on("click", function () { // faq
            location.href = "news-faq.html";
        });
        $(".sidebar-menu a:eq(7)").on("click", function () { // Terms Of Services

            location.href = "terms-of-services.html";
        });
        $(".sidebar-menu a:eq(8)").on("click", function () { // Sign out

            location.href = "login.html";
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


    };


})();

