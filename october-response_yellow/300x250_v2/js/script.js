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
,     f2_t1 = document.getElementById("f2_txt1")
,     f2_i1 = document.getElementById("f2_img1")
,     f2_i2 = document.getElementById("heart_sign")
,     f3_t1 = document.getElementById("f3_txt1")
,     f3_i1 = document.getElementById("f3_img1")
,     f3_i2 = document.getElementById("white_patch")
,     f3_i3 = document.getElementById("cross_sign")
;

// Animation
var t1 = new TimelineLite();

t1
.from( f1_t1, 1, {left: 300, ease:"easeInOutBack"})
.from( f1_t2, 1, {left: 300, ease:"easeInOutBack"},"-=0.5")
.from( f1_i1, 0.5, {scale: 0, ease:"easeOutBack"})
.to( f2_i1, 1, {scale:0.5,left:120,top:-58, ease:"easeInOutBack"})
.to( f1_t2, 0.5, {top: "-=20",autoAlpha:0, ease:"easeInOutBack"},"+=1")
.from( f2_t1, 1, {top: "-=20", ease:"easeInOutBack"})
.to( f2_t1, 1, {autoAlpha:1, ease:"easeInOutBack"},"-=1")
.to( f2_i1, 1, {scale:1,left:175,top:26, ease:"easeInOutBack"},"-=1")
.to( f1_i1, 1, {scale:0.5,left:270,top:80, ease:"easeInOutBack"},"-=1")
.to( f2_i2, 1, {opacity:1, ease:"easeInOutBack"})
.to( f3_i1, 1, {scale:0.5,left:120,top:-58, ease:"easeInOutBack"})
;