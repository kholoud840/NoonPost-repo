$(document).ready(function () {

    $(".c-menu-mobile").on("click" , function(){
        $(".c-nav").toggleClass("open");
    });

    $(".c-button--search").on("click" , function(){
        $(".c-search--mobile").toggleClass("open");
    });

});