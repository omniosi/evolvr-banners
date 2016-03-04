// ISI scroll animation
function ISIscroll(){
    var content = $(".scrollInner"),
          autoScrollTimer=85000,
          autoScrollTimerAdjust,
          autoScroll;

    content.mCustomScrollbar({
        scrollButtons:{ enable:true,
                                scrollAmount:1},
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
,       s2t1 = document.getElementsByClassName('screen2_txt1')[0]
,       s2t2 = document.getElementsByClassName('screen2_txt2')[0]
,       s3t2 = document.getElementsByClassName('screen3_txt2')[0]
,       s4t1 = document.getElementsByClassName('screen4_txt1')[0]
,       s4t2 = document.getElementsByClassName('screen4_txt2')[0]
,       s4box = document.getElementsByClassName('box')[0]
,       s5logo = document.getElementsByClassName('logo')[0]
,       s5t1 = document.getElementsByClassName('screen5_txt1')[0]
,       scroller = document.getElementsByClassName('scrollBlock')[0]
,       footer = document.getElementsByClassName('footer')[0]
,       shine = document.getElementsByClassName('shine')[0]
,       cta = document.getElementsByClassName('txtbtn2')[0]
,       clock1 = document.getElementsByClassName('clock1')[0]
,       clock2 = document.getElementsByClassName('clock2')[0]
,       clock3 = document.getElementsByClassName('clock3')[0]
,       clock4 = document.getElementsByClassName('clock5')[0]
,       clock5 = document.getElementsByClassName('clock8')[0]
,       clock6 = document.getElementsByClassName('clock10')[0]
,       clock7 = document.getElementsByClassName('clock11')[0]
,       pin1 = document.getElementsByClassName('pin1')[0]
,       pin2 = document.getElementsByClassName('pin2')[0]
,       pin3 = document.getElementsByClassName('pin3')[0]
,       pin4 = document.getElementsByClassName('pin4')[0]
,       pin5 = document.getElementsByClassName('pin5')[0]
,       pin6 = document.getElementsByClassName('pin6')[0]
,       pin7 = document.getElementsByClassName('pin7')[0]
,       pin8 = document.getElementsByClassName('pin8')[0]
,       pin9 = document.getElementsByClassName('pin9')[0]
,       pin10 = document.getElementsByClassName('pin10')[0]
;

// Animations
var t1 = new TimelineLite();
t1
.to(s2, 0, {autoAlpha:1, ease:"easeInOutBack"}, "one")
.from(s2t1, 1, {top:32, ease:"easeInOutBack"}, "+=0.5")
.to(s2t2, 0.5, {opacity:1, ease:Back.easeInOut}, "-=0.5")
.from(clock1,0.5,{scale:0,ease:"easeInOutBack"})
.from(clock4,0.5,{scale:0,ease:"easeInOutBack"})
.from(clock6,0.5,{scale:0,ease:"easeInOutBack"}, "-=0.25")
.from(clock3,0.5,{scale:0,ease:"easeInOutBack"})
.from(clock2,0.5,{scale:0,ease:"easeInOutBack"}, "-=0.25")
.from(clock5,0.5,{scale:0,ease:"easeInOutBack"})
.from(clock7,0.5,{scale:0,ease:"easeInOutBack"})
.to(s2, 1, {autoAlpha:0, ease:"easeInOutBack"},"cross")
.to(s3, 1, {autoAlpha:1, ease:"easeInOutBack"},"cross")
.from(s3t2, 1, {opacity:0, top:108, ease:"easeInOutBack"})
.from(pin1,0.5,{top:"-=30",opacity:0,ease:"easeInOutBack"})
.from(pin2,0.25,{top:"-=30",opacity:0,ease:"easeInOutBack"}, "-=0.25")
.from(pin3,0.5,{top:"-=30",opacity:0,ease:"easeInOutBack"})
.from(pin4,0.25,{top:"-=30",opacity:0,ease:"easeInOutBack"}, "-=0.25")
.from(pin7,0.25,{top:"-=30",opacity:0,ease:"easeInOutBack"}, "-=0.25")
.from(pin8,0.5,{top:"-=30",opacity:0,ease:"easeInOutBack"})
.to(s3, 1, {autoAlpha:0, ease:"easeInOutBack"})
.to(s4, 1, {autoAlpha:1, ease:"easeInOutBack"}, "fourin-=1")
.from(s4box, 1, {top:-200, ease:Expo.easeOut}, "-=0.25")
.to(scroller, 1, {autoAlpha:1, ease:"easeInOutBack"})
.to(footer, 1, {autoAlpha:1, ease:"easeInOutBack"}, "-=1")
.to(s4box, 1, {scale:0.7, right:274, top:-5, ease:Expo.easeInOut})
.to(s4t1, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "fourout")
.to(s4t2, 0.5, {css: {opacity:0}, ease:"easeInOutBack"}, "fourout")
.to(s5, 1, {autoAlpha:1, ease:"easeOut"}, "-=1")
.from(s5logo, 1, {top:"-=20", opacity:0, ease:Expo.easeInOut},"-=0.5")
.from(s5t1, 1, {left:"-=20", opacity:0, ease:"easeInOutBack"},"-=0.8")
.from(cta, 1, {top:"+=90", ease:"easeInOutBack"}, "cta-=1")
.to(cta, 1, {opacity:1, ease:"easeInOutBack"}, "cta-=1")
.to(shine, 2, {css: {opacity:1, left:150}, ease:"easeInOutExpo"})
;

ISIscroll();