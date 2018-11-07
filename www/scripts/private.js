(function () {
    "use strict";

    var url = 'http://cypherlab.net/api/';

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {


       $("#pri").on("click", function () { // Sign out

            location.href = "privateEvent.html";
        });



    };


})();

