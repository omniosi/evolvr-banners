$(document).ready(function(){
    $("#f5_btn img").hover(function() {
        // $(this).attr("src","images/f5_btn_hover.png");
            }, function() {
        // $(this).attr("src","images/f5_btn.png");
    });
});

// ISI Scroll animation ?

// Elements
var isi_img = document.getElementById("isi_img")
,     f1_img1 = document.getElementById("f1_img1")
,     f1_t1 = document.getElementById("f1_txt1")
,     f1_t2 = document.getElementById("f1_txt2")
,     patient = document.getElementById("patient")
;

// Animation
var t1 = new TimelineLite();
t1
// .from(f1_t2,1,{opacity:0,ease:"easeInOutBack"})
.to(f1_t2,1,{opacity:0,ease:"easeInOutBack"})
;