// navigator
function navGrow(){
  if ($("nav").css("right") === "-450px")
  {
  $("nav").css("right", "0");
  $(".hamburger").addClass("rotate_ham_out");
  } else {
      $("nav").css("right", "-450px");
      $(".hamburger").removeClass("rotate_ham_out");
  }
}

$(".hamburger").click(navGrow);

//circle reveal at page load
$(document).ready(function() {
    $("#logo").css("opacity", "1.0");
     $(".clipper").css({"width":"3000px", "height":"3000px"});    
});

//waypoint to trigger icon fadein
    var waypoint = new Waypoint({
  element: document.getElementById('loadabout'),
  handler: function() {
    fadeinicons();
  },
    offset: 'bottom-in-view'
});

//fades in icons and then adds opacity to the sunglasses. 
function fadeinicons(){
  if ($(".icon").css("opacity") === "0"){
    $("#stanbans").addClass("stanbansstyle");
    $(".icon").addClass("iconspin");
    $("#stanbans").css({"opacity":"1", "top":"10px"});
 }; 
};

//hover over icon for slider text. oh snap, i just used 'this' for the first time

function hoverIcon1() {
/*disabling until I can workout the resizing PROBLEMID#1
   $(this).siblings(".aboutstufftext").find(".slider").toggleClass("sliderout");
*/
    $(this).siblings(".aboutstufftext").find(".slider").toggleClass("sliderout");
};
$(".icon").hover(hoverIcon1);


//controls the popup text on the right side in the about section
function icontriggertext1() {
  $(".rightsidetext").html('<h4>BRAND STRATEGY</h4><div class="rsi"><img src="img/brandicon.svg" class="iconright"></img></div><h2>Your Brand is Awesome.</h2><p>So it should look and feel the part. Create a visual narrative that communicates just how amazing your brand is.</p> <ul><li></i><i class="fa fa-bolt"></i>Content Style-Guide Development</li></li><li><i class="fa fa-bolt"></i>Identity Consulting</li><li><i class="fa fa-bolt"></i>Logotype Design</li><li><i class="fa fa-bolt"></i>more +</li></ul>');
  $(".aboutrightside").css({"opacity": "1","background-color":"rgba(0, 0, 0, 0.7)"});
  $(".aboutrightside").toggleClass("righttextmarginup");
  $(".about").removeClass("codebackground2");
  $(".about").removeClass("codebackground3");
  $(".about").addClass("codebackground1");
};
function icontriggertext2() {
  $(".rightsidetext").html("<h4>WEB DESIGN & <br>DEVELOPMENT</h4><div class='rsi'><img src='img/webdevicon.svg' class='iconright'></img></div><h2>Conception to Implementation.</h2><p>Offering a full suite of design and web development services, using modern design tools to create fully responsive, mobile-friendly websites.</p>");
  $(".aboutrightside").css({"opacity": "1","background-color":"rgba(0, 0, 0, 0.7)"});
  $(".aboutrightside").toggleClass("righttextmarginup");
  $(".about").removeClass("codebackground1");
  $(".about").removeClass("codebackground3");
  $(".about").addClass("codebackground2");
};
function icontriggertext3() {
  $(".aboutleftside").css("background-color","rgba(0, 0, 0, 0.5)");
  $(".rightsidetext").html('<h4>MEDIA PRODUCTION</h4><div class="rsi"><img src="img/icon3.svg" class="iconright"></img></div><h2>Quality Matters.</h2><p>You know what the "real thing" looks and like, and so do your clients.</p><ul><li></i><i class="fa fa-bolt"></i>Branding Material</li></li><li><i class="fa fa-bolt"></i>Collateral</li><li><i class="fa fa-bolt"></i>illustration</li><li><i class="fa fa-bolt"></i>more +</li></ul><p>Creating custom digital and print media that speaks to your brands audience.</p>');
  $(".aboutrightside").css({"opacity": "1", "background-color": "rgba(0, 0, 0, 0.7)"});
  $(".aboutrightside").toggleClass("righttextmarginup");
  $(".about").removeClass("codebackground1");
  $(".about").removeClass("codebackground2");
  $(".about").addClass("codebackground3");
};

$("#icon1").hover(icontriggertext1);
$("#icon2").hover(icontriggertext2);
$("#icon3").hover(icontriggertext3);

//fade out header on scroll
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('header, .fa-caret-down').css({
        'opacity': ((height - scrollTop) / height) 
    });

});


// expands the gallery window when click on thumb 
function galleryExpand(){
  $(".fa-times-con").css("padding-left", "100%");
 $(".fa-times").removeClass("rotate_spin_out");
  $(".fa-times").css("opacity","1");
  $(this).next().css("left", "0");
  $(this).next().find(".galtext").css("margin-left", "52.5%");
};

$(".gallerythumb").click(galleryExpand);

//gallerybackbutton

function spinthex() {
  $(".gallery").css("opacity", "1");
  $(".fa-times").css("opacity", "0");
  $(".galtext").css("margin-left", "0%");
  $(".gallerywindow").css("left","-100%");
  $(".fa-times").toggleClass("rotate_spin_out");
  $(".fa-times-con").css("padding-left","0");
}

  $(".fa-times, .gallerywindow").click(spinthex);



// on click of backbutton hide parent container and show gallery
/*function backbutton() {
    $(".gallery").css("opacity", "1");
    $(".galtext").css("margin-left", "0%");
  $(".gallerywindow").css("left","-100%");
};

$(".backbutton, .gallerywindow").click(backbutton);
*/
//scroll to functions

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top
    }, 1000);
});


$("#details").click(function() {
    $('html, body').animate({
        scrollTop: $("#thumb3").offset().top
    }, 1000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contactform").offset().top
    }, 1000);
});

// gets rid of navigator on scroll

$(window).scroll(function() {
      $("nav").css("right", "-450px");
      $(".hamburger").removeClass("rotate_ham_out");
      $(".logo").addClass("changelogo");

});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
   }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
       $(".clipper2").css("width", "100%");
   }
});


//Contact form

$(document).ready(function() { 

  $('#send').click(function(e){

    e.preventDefault();

    if ((isEmpty($('#subject'))) || (isEmpty($('#name'))) || (isEmpty($('#email'))) || (isEmpty($('#msg'))) || (!isEmail($('#email').val()))) {

      $("#dialog").fadeOut("slow");
      $("#dialog").fadeIn("slow");

    } else {

      $("#dialog").fadeOut("slow");
      $('#dialog-success').css('display', 'table');
      $('#dialog-success .dialog-status').html("Sending form.");
      $('#dialog-success .dialog-text').html("Please wait...");
      $('#dialog-success').fadeIn("slow");
      $('#close-dialog').hide();

      dataRequest = "&subject=" + $('#subject').val() + "&name=" + $('#name').val() + "&email=" + $('#email').val() + "&msg=" + $('#msg').val();
      
      $('#loader').fadeIn("slow");
      
      $.ajax({
          url: 'send.php',
          type: 'get',
          dataType: 'json',
          data: dataRequest,
          cache: false,
          async:true,
          success: function(data) {
            console.log('success: ' + data);
            clean();
          },
          error: function(data){
            console.log('error: ' + data);
            clean();
          }
        }); 

    }

  });
  
  $('#close-dialog').click(function(){
    $('#dialog-success').fadeOut("slow");
  });
    
});

function isEmpty(object){
  return ((object == null) || (object.val() == ""));
}

function clean(){
  $('#loader').fadeOut("slow");
  $('#company').val("");
  $('#subject').val("");
  $('#name').val("");
  $('#email').val("");
  $('#phone').val("");
  $('#msg').val("");

  $('#dialog-success').css('display', 'table');
  $('#dialog-success .dialog-status').html("Message Delivered");
  $('#dialog-success .dialog-text').html("");
  $('#dialog-success').fadeIn("slow");
  $('#close-dialog').show();
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// removes broken back button for firefox, temp fix until I cn sort out padding issue
if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
    console.log("ff detected");
   $(".fa-times-con").css("display", "none");
}
    
