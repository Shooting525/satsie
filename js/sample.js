$(function(){

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $(".works_container img").click(function() {
        $("#img_extend").html($(this).prop('outerHTML'));
        $("#img_extend").fadeIn(200);
      });
      $("#img_extend, #img_extend img").click(function() {
        $("#img_extend").fadeOut(200);
      });

    $('#hamburger-button').click(function() {
      if($('#hamburger-menu').hasClass('active')) {
        $('#hamburger.menu').removeClass('active').slideDown();
      } else {
        $('#hamburger-menu').addClass('active').slideUp();
      }
    });

    function hamburger() {
      var x = document.getElementById("#nav-sm-item");          
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
   
});