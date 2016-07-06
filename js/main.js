$(document).on('ready', function() {

    $("button").click(function(){
        $(".light").toggleClass("dark");
        $(".status").toggle();
        $(".on").toggleClass("off");
    });
});


//     if($('button').hasClass("on")) {
//       $("body").addClass("dark");
//     }
//     else {
//       $("body").removeClass("dark");
//     });
// });