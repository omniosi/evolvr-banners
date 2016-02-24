$(document).ready(function(){
    $("#f5_btn img").hover(function() {
        $(this).attr("src","../img/f5_btn_hover.png");
            }, function() {
        $(this).attr("src","../img/f5_btn.png");
    });
});

// ISI Scroll animation

// Elements
var f1_t1 = document.getElementById("f1_txt1")
,     f1_t2 = document.getElementById("f1_txt2")
,     f1_i1 = document.getElementById("patient")
;

// Animation
var t1 = new TimelineLite();

t1
.from( f1_t1, 1, {left: 300, ease:"easeInOutBack"})
.from( f1_t2, 1, {left: 300, ease:"easeInOutBack"},"-=0.5")
.from( f1_i1, 0.5, {scale: 0, ease:"easeOutBack"})
// .from( f1_t2, 1, {opacity: 0, ease:"easeInOutBack"})
;