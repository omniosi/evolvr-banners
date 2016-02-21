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
var     s2 = document.getElementsByClassName('screen2')[0]
,       s2t1 = document.getElementsByClassName('screen2_txt1')[0]
,       s2t2 = document.getElementsByClassName('screen2_txt2')[0]
;
// Animations
TweenLite.to(s2, 1, {css: {opacity:1}, ease:"easeInOutBack"});
TweenLite.to(s2t1, 1, {css: {opacity:1}, ease:"easeInOutBack"});
TweenLite.to(s2t2, 1, {delay:0.5, css: {opacity:1}, ease:"easeInOutBack"});