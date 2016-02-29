 $(document).ready(function(){
    $("#f5_btn img").hover(function() {
        $(this).attr("src","img/f5_btn_hover.png");
            }, function() {
        $(this).attr("src","img/f5_btn.png");
    });
});

// ISI Scroll animation

// Elements
var f1 = document.getElementById("frame1")
,     f2 = document.getElementById("frame2")
,     f3 = document.getElementById("frame3")
,     f4 = document.getElementById("frame4")
,     f1_t1 = document.getElementById("f1_txt1")
,     f1_t2 = document.getElementById("f1_txt2")
,     f1_i1 = document.getElementById("f1_img1")
,     f2_t1 = document.getElementById("f2_txt1")
,     f2_i1 = document.getElementById("f2_img1")
,     heart = document.getElementById("heart_sign")
,     f3_t1 = document.getElementById("f3_txt1")
,     f3_i1 = document.getElementById("f3_img1")
,     cross = document.getElementById("cross_sign")
,     f4_t1 = document.getElementById("f4_txt1")
,     f4_t2 = document.getElementById("f4_txt2")
,     f4_i1 = document.getElementById("f4_img1")
,     penArt = document.getElementById("epipen_pack")
,     f5_i1 = document.getElementById("f5_pen")
,     f5_i2 = document.getElementById("logo")
,     f5_i3 = document.getElementById("f5_btn")
,     shine = document.getElementById("shine")
;

// Animation
var tll1 = new TimelineLite();
var l1 = 132 // position (152) minus half the size transform difference (20)
,		t1 = "-55" // position ("-35") minus half the size transform difference (20)
,		l2 = 172
,		t2 = 23 //position (27) adjustment to center middle icon
,		l3 = 250 // position (270) minus half the size transform difference (20)
,		t3 = 60 // position (80) minus half the size transform difference (20)
,		l4 = 320
,		t4 = 120
,		l0 = 92
,		t0 = "-95"
,		o1 = 0.7
,		o2 = 0.5
;

tll1
.from( f1, 0.5, {autoAlpha: 0, ease:"easeInOutBack"})
.to( f1_i1, 0.5, {scale:0.6,opacity:o1, left:l1, top:t1, ease:Back.easeOut.config(0.8)},"-=0.5")
.from( f1_t2, 1, {top: "-=20", ease:"easeInOutBack"})
.to( f1_t2, 1, {opacity:1, ease:"easeInOutBack"},"-=1")
.to( f1_i1, 1, {scale:1,opacity:1, left:l2, top:t2, ease:Back.easeOut.config(0.8)},"-=1")
.to( f2_i1, 1, {scale:0.6,opacity:o1,left:l1,top:t1, ease:Back.easeOut.config(0.8)},"-=1")
.to( f1_t2, 0.5, {top: "-=20",autoAlpha:0, ease:"easeInOutBack"},"+=1")
.from( f2_t1, 1, {top: "-=20", ease:"easeInOutBack"})
.to( f2_t1, 1, {autoAlpha:1, ease:"easeInOutBack"},"-=1")
.to( f2_i1, 1, {scale:1,opacity:1, left:l2, top:t2, ease:Back.easeOut.config(0.8)},"-=1")
.to( f1_i1, 1, {scale:0.6,opacity:o1,left:l3,top:t3, ease:Back.easeOut.config(0.8)},"-=1")
.to( f3_i1, 1, {scale:0.6,opacity:o1,left:l1,top:t1, ease:Back.easeOut.config(0.8)},"-=1")
.to( heart, 0.5, {scale:1.0,ease:Back.easeOut.config(0.8)},"-=1")
.to( heart, 0.5, {scale:0.5,ease:Back.easeIn.config(0.8)})
.to( heart, 0.5, {scale:1.0,ease:Back.easeOut.config(0.8)})
.to( heart, 0.5, {scale:0.5,ease:Back.easeIn.config(0.8)})
.to( heart, 0.5, {scale:1.0,ease:Back.easeOut.config(0.8)})
.to( heart, 0.5, {scale:0.5,ease:Back.easeIn.config(0.8)})
.to( f2_t1, 0.5, {top: "-=20",autoAlpha:0, ease:"easeInOutBack"},"-=1")
.to( f1_t1, 1, {top: "30", ease:"easeInOutBack"})
.from( f3_t1, 1, {top: "-=20", ease:"easeInOutBack"})
.to( f3_t1, 1, {autoAlpha:1, ease:"easeInOutBack"},"-=1")
.to( f3_i1, 1, {scale:1,opacity:1, left:l2,top:t2, ease:Back.easeOut.config(0.8)},"-=1")
.to( f2_i1, 1, {scale:0.6,opacity:o1,left:l3,top:t3, ease:Back.easeOut.config(0.8)},"-=1")
.to( f1_i1, 1, {scale:0.4,opacity:o2,left:l4,top:t4, ease:Back.easeOut.config(0.8)},"-=1")
.to( f4_i1, 1, {scale:0.6,opacity:o2,left:l1,top:t1, ease:Back.easeOut.config(0.8)},"-=1")
.to( cross, 2, {rotationY:180,ease:Back.easeInOut.config(0.8)},"-=1")
.to( cross, 2, {rotationY:-180,ease:Back.easeInOut.config(0.8)},"+=0.5")
.to( cross, 2, {rotationY:180,ease:Back.easeInOut.config(0.8)},"+=0.5")
.to( f1_t1, 0.5, {top: "-=20",autoAlpha:0, ease:"easeInOutBack"})
.to( f3_t1, 0.5, {top: "-=20",autoAlpha:0, ease:"easeInOutBack"},"-=1")
.to( f4_t1, 1, {opacity:1, ease:"easeInOutBack"})
.from( f4_t2, 1, {top: "-=20", ease:"easeInOutBack"})
.to( f4_t2, 1, {opacity:1, ease:"easeInOutBack"},"-=1")
.to( f4_i1, 1, {scale:1,opacity:1,left:l2,top:t2, ease:Back.easeOut.config(0.8)},"-=1")
.to( f3_i1, 1, {scale:0.6,opacity:o1,left:l3,top:t3,ease:Back.easeOut.config(0.8)},"-=1")
.to( f2_i1, 1, {scale:0.4,opacity:o2,left:l4,top:t4,ease:Back.easeOut.config(0.8)},"-=1")
.to( penArt, 1, {rotation:47, ease:"easeInBack"},"+=1")
.to( f3_i1, 1, {scale:0.4,opacity:o2,left:l4,top:t4,ease:Back.easeOut.config(0.8)},"-=1")
.to( f5_i1, 1, {autoAlpha:1, ease:"easeInOutBack"},"+=0.25")
.to( f5_i1, 0.5, {scale:1,top:10,left:10, ease:"easeInOut"})
.to( f4_i1, 0.5, {autoAlpha:0, ease:"easeInOutBack"},"-=1")
.to( f4_t1, 0.5, {autoAlpha:0, ease:"easeInOutBack"},"-=1.5")
.to( f4_t2, 0.5, {autoAlpha:0, ease:"easeInOutBack"},"-=1.5")
.to( f5_i2, 0.5, {autoAlpha:1})
.to( f5_i3, 0.5, {autoAlpha:1},"-=0.5")
.from( f5_i2, 1, {left:300, ease:"easeInOutBack"},"-=2")
.from( f5_i3, 0.5, {left:300, ease:"easeInOutExpo"},"-=0.5")
.to(shine, 2, {css: {opacity:1, left:250}, ease:"easeInOutExpo"})
;