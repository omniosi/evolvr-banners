// ISI scroll animation
function ISIscroll(){
    var content = $(".scrollInner"),autoScrollTimer=85000,autoScrollTimerAdjust,autoScroll;

    content.mCustomScrollbar({
        scrollButtons:{enable:true,scrollAmount:1},
		mouseWheel:{scrollAmount:12 }
		//, callbacks:{
                        //     whileScrolling:function(){
                        //         autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
                        //         $('.scrollInner').on('mouseenter', function(){
                        //             AutoScrollOff();
                        //         });
                        //         $('.scrollInner').on('mouseleave', function(){
                        //             AutoScrollOff();
                        //             AutoScrollOn("bottom");
                        //         });
                        //     }
                        //}
    });

    content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
    // setTimeout(function(){AutoScrollOn("bottom"); }, 4000);

    function AutoScrollOn(to,timer){
        if(!timer){timer=autoScrollTimer;}
        content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"linear"});
        autoScroll=setTimeout(function(){
            if(content.hasClass("auto-scrolling-to-top")){
                AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
                content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
            }else{
                AutoScrollOff();
                content.mCustomScrollbar("scrollTo",0);
            }
        },timer);
    }
    function AutoScrollOff(){
        clearTimeout(autoScroll);
        content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
    }
}

// Elements
var      s2 = document.getElementsByClassName('screen2')[0]
,          s3 = document.getElementsByClassName('screen3')[0]
,          s4 = document.getElementsByClassName('screen4')[0]
,          s5 = document.getElementsByClassName('screen5')[0]
,       s2t2 = document.getElementsByClassName('screen2_txt2')[0]
,       s3t2 = document.getElementsByClassName('screen3_txt2')[0]
,       s4t1 = document.getElementsByClassName('screen4_txt1')[0]
,       s4t2 = document.getElementsByClassName('screen4_txt2')[0]
,       s4box = document.getElementsByClassName('box')[0]
,       s5logo = document.getElementsByClassName('logo')[0]
,       s5t1 = document.getElementsByClassName('screen5_txt1')[0]
,       shine = document.getElementsByClassName('shine')[0]
,       cta = document.getElementsByClassName('txtbtn2')[0]
;
// Animations
var t1 = new TimelineLite();
t1
.to(s2, 1, {css: {opacity:1}, ease:"easeInOutBack"})
.to(s2t2, 1, {css: {opacity:1}, ease:"easeInOutBack"}, "+=0.5")
.to(s2, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "+=2")
.to(s3, 0.5, {css: {opacity:1}, ease:"easeInOutBack"})
.to(s3t2, 1, {css: {opacity:1}, ease:"easeInOutBack"}, "+=1")
.to(s3, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "+=2")
.to(s4, 0.5, {css: {opacity:1}, ease:"easeInOutBack"})
.to(s4t2, 1, {css: {opacity:1}, ease:"easeInOutBack"}, "-=0.25")
.from(s4box, 1, {css: {top:30,right:-150,opacity:0}, ease:"easeInOutBack"}, "-=0.25")
.to(s5, 0.5, {css: {opacity:1}, ease:"easeInOutBack"}, "+=2")
.to(s4t1, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "fourout")
.to(s4t2, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "fourout")
.to(s5logo, 1, {css: {opacity:1}, ease:"easeInOutBack"}, "fivein")
.to(s4box, 1, {scale:0.5, css: {top:15}, ease:"easeInOutBack"}, "fivein")
.to(s5t1, 1, {css: {opacity:1}, ease:"easeInOutBack"})
.from(cta, 1, {css: {opacity:0,right:-200}, ease:"easeInOutBack"}, "cta")
.to(shine, 1, {css: {opacity:1}, ease:"easeInOutBack"}, "cta")
;
t1.seek("fourout");