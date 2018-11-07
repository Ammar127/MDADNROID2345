(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {


        $(".dealdetail").on("click", function () {

            location.href = "DealDetail.html";
        });

    };

})();