
$.html5Loader({
      filesToLoad:'assets/menu', 
      onBeforeLoad:function () {},
      onComplete:function () {
        //$(".preloader").remove();
        $(".preloader").animate({opacity: "0"},{complete: function(){ $(this).remove(); }}, "slow");
      },
      onElementLoaded:function ( obj, elm) { },
      onUpdate:function ( percentage ) {
        //console.log(percentage);
        $(".preloader .text span").text(percentage);
      }
});