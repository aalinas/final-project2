    
$('button.start').on("click", function() {
    bg.load();
    bg.play();  

    function animateNotes(item$) { // animates notes
    var w = Math.min($(window).width(), $("#gamescreen").width());
    var r = Math.floor(Math.random()*2000) + 2000;
    item$.animate({top: (w + item$.width()) + "px"}, r, 'linear', function() {
        item$.css("top", -item$.width());    
        animateNotes(item$);  
        drumaudio1.load();
        drumaudio1.play();      
    });
    } 
    $('.box').each(function() {
    animateNotes($(this));
    });


});


$('button.restart').on("click", function() {
    location.reload(true);  //reload page 
});


// var drum1 = document.getElementById('drum1');

$('body').on('keydown', function (e) {

    if (e.keyCode == 65) {  // a   
         $('#drum1').css('background-image',"url(img/drum1hit.png)"); 
         drumaudio1.load();
         drumaudio1.play();
         
    }

    if (e.keyCode  == 83) {  // s
         $("#drum2").css('background-image',"url(img/drum2hit.png)"); 
         drumaudio2.load();
         drumaudio2.play();
     }

     if (e.keyCode  == 75) {  // k
         $("#drum3").css('background-image',"url(img/drum2hit.png)"); 
         drumaudio3.load();
         drumaudio3.play();
     }

     if (e.keyCode  == 76) {  // l
         $("#drum4").css('background-image',"url(img/drum1hit.png)"); 
        drumaudio4.load();
         drumaudio4.play();
     }



});

$('body').on('keyup', function (e) {

    if (e.keyCode == 65) {  // a
         $('#drum1').css('background-image',"url(img/drum1.png)"); 
    }

    if (e.keyCode  == 83) {  // s
         $("#drum2").css('background-image',"url(img/drum2.png)"); 
     }

     if (e.keyCode  == 75) {  // k
         $("#drum3").css('background-image',"url(img/drum2.png)"); 
     }

     if (e.keyCode  == 76) {  // l
         $("#drum4").css('background-image',"url(img/drum1.png)"); 
     }


});

//drum audio
var drum1 = document.getElementById('drumaudio1');
var drum2 = document.getElementById('drumaudio2');
var drum3 = document.getElementById('drumaudio3');
var drum4 = document.getElementById('drumaudio4');

//bg audio
var bgaudio = document.getElementById('bg');















