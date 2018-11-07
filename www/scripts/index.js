(function () {
    "use strict";

    var url = 'http://cypherlab.net/api/';

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        getValueFromApi();

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

        $("#priv").on("click", function () {

            location.href = "passs.html";
        });
        $("#deal").on("click", function () {

            location.href = "Deal.html";
        });


        $(".slide-category").on("click", function () {
            const category = $(this).data("category");
            console.log(category);
            location.href = "campaign-sales.html";
        });

        // $(".slide-detail").on("click", function () {
        //     //const category = $(this).data("category");
        //     //console.log(category);
        //     location.href = "campaign-details.html";
        // });
        var timer = 0;
        var delay = 200;
        var prevent = false;
        $(".slide-detail")
            .on("click", function() {
                timer = setTimeout(function() {
                    if (!prevent) {
                        location.href = "campaign-details.html";
                    }
                    prevent = false;
                }, delay);
            })
            .on("dblclick", function() {
                clearTimeout(timer);
                prevent = true;

                // $(this).find( "i" ).css("display", "block");
// alert($(this).find( "i" ).css("display"));
                if ($(this).find( 'i' ).css('display') === 'none') {

                    $(this).find( 'i' ).css("display" ,"block");
                   // alert('none');
                }
                else {
                    $(this).find( 'i' ).css("display" , "none");
                    //alert('block');
                }
                });




        $(".slide-promoter").on("click", function () {
            //const category = $(this).data("category");
            //console.log(category);
            location.href = "campaign-sales.html";
        });


        $(".all-campaigns").on("click", function () {
            const context = $(this).data("context");
            console.log(context);
            location.href = "campaign-sales.html";
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

    function getValueFromApi() {
        $.getJSON(url + 'values/1', function (result) {
            //alert(result);
            //console.log(result);
        }).fail(function (jqXHR) {
            //console.log(jqXHR.statusText);
            //$('#error-msg').show();
            //$('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
        });
        return false;
    }
})();

