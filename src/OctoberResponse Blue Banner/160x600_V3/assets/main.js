var screen1 = $('.screen1'),
screen2 = $('.screen2'),
screen3 = $('.screen3'),
screen4 = $('.screen4'),
screen5 = $('.screen5'),
loaderWrapper = $('.loader_wrapper'),
logo1 = $('.logo1'),
loader = $('#loader'),
clock1 = $('.clock1'),
clock2 = $('.clock2'),
clock3 = $('.clock3'),
clock4 = $('.clock4'),
clock5 = $('.clock5'),
clock6 = $('.clock6'),
clock7 = $('.clock7'),
clock8 = $('.clock8'),
clock9 = $('.clock9'),
clock10 = $('.clock10'),
clock11 = $('.clock11'),
clock12 = $('.clock12'),
screen2_txt1 = $('.screen2_txt1'),
screen2_txt2 = $('.screen2_txt2'),
pin = $('.pin'),
pin1 = $('.pin1'),
pin2 = $('.pin2'),
pin3 = $('.pin3'),
pin4 = $('.pin4'),
pin5 = $('.pin5'),
pin6 = $('.pin6'),
pin7 = $('.pin7'),
pin8 = $('.pin8'),
pin9 = $('.pin9'),
pin10 = $('.pin10'),
screen3_txt1 = $('.screen3_txt1'),
screen3_txt2 = $('.screen3_txt2'),
screen4_txt1 = $('.screen4_txt1'),
screen4_txt2 = $('.screen4_txt2'),
box = $('.box'),
footer = $('.footer'),
logo = $('.logo'),
screen5_txt1 = $('.screen5_txt1'),
txtbtn = $('.txtbtn'),
framebtn = $('.framebtn'),
txtbtn1 = $('.txtbtn1'),
txtbtn2 = $('.txtbtn2'),
txtbtnhover = $('.txtbtnhover'),
scrollBlock = $('.scrollBlock'),
smallText = $('.smallText'),
screen4Bg = $('.screen4Bg'),
frame4_footer_text = $('.frame4_footer_text'),
frame1imgdrop1 = $('.frame1-img-drop1'),
frame1imgdrop2 = $('.frame1-img-drop2'),
frame1imgdrop3 = $('.frame1-img-drop3'),
frame1imgdrop4 = $('.frame1-img-drop4'),
framebtn = $('.framebtn'),
shine = $('.shine'),
consider = $('.consider'),
durationSlide = 4000;
var intDuration = 500;

function animations(){
	$.when(
		//loader.animate({opacity: 0, easing: 'easeInQuad'}, 1000).promise()
		loaderWrapper.animate({opacity: 1, easing: 'easeInQuad'}, 1000).promise()
	 ).done(function(){
			screen1.animate({opacity: 0.95, easing: 'easeInQuad'}, 1000).delay(3000).promise()
			.done(function(){
				screen2.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
				clock1.animate({opacity: 0.35, easing: 'easeOutQuad'}, 350).promise(),
				clock4.delay(300).animate({opacity: 0.4, easing: 'easeOutQuad'}, 350).promise(),
				clock7.delay(500).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock6.delay(700).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				screen1.delay(500).animate({top: 232, easing: 'easeInQuad'}, 500).promise(),
				screen2_txt2.delay(800).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
				clock2.delay(900).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock11.delay(1100).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock3.delay(1300).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock5.delay(1500).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock9.delay(1700).animate({opacity: 0.35, easing: 'easeOutQuad'}, 350).promise(),
				clock8.delay(1900).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock10.delay(2050).animate({opacity: 0.4, easing: 'easeOutQuad'}, 350).promise(),
				clock12.delay(2200).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise()
				//more clocks
				.done(function(){
					screen2.delay(6500).animate({opacity:0, easing: 'easeInQuad'}, 600).promise()

					.done(function(){
						screen3.css({'display' : 'block'});
						screen3.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
						/*pin.effect( "pulsate", {times:100}, 500 );*/
						pin1.animate({top:-5,opacity:0.4,easing: 'easeOutBounce'},800).promise(),
						pin2.delay(600).animate({top:31,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
						pin4.delay(900).animate({top:160,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
						pin3.delay(1200).animate({top:501,opacity:0.8, easing: 'easeOutBounce'}, 800).promise(),
						pin5.delay(1500).animate({top:480,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
						screen3_txt2.delay(1500).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
						pin6.delay(1800).animate({bottom:-12,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
						pin7.delay(2100).animate({bottom:121,opacity:0.6, easing: 'easeOutBounce'}, 800).promise(),
						pin8.delay(2200).animate({top:102,opacity:0.8, easing: 'easeOutBounce'}, 800).promise(),
						pin9.delay(2400).animate({top:126,opacity:0.8, easing: 'easeOutBounce'}, 800).promise(),
						pin10.delay(2500).animate({bottom:150,opacity:0.8, easing: 'easeOutBounce'}, 800).promise()
						
						.done(function(){
							screen3.delay(6000).animate({opacity:0, easing: 'easeInQuad'}, 600).promise(),
							screen1.delay(6000).animate({opacity:0, easing: 'easeInQuad'}, 700).promise()
							.done(function(){
								screen4.css({'display' : 'block'})
								screen4.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
								screen4_txt1.delay(600).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
								screen4_txt2.delay(600).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
								scrollBlock.delay(600).css({'display' : 'block'});
								scrollBlock.delay(600).animate({opacity: 1, easing: 'easeInQuad'}, 500).promise(),
								footer.delay(600).css({'display' : 'block'});
								footer.delay(600).animate({opacity: 1, easing: 'easeInQuad'}, 500).promise(),
								ISIscroll();
								box.delay(800).animate({right: 10,opacity: 1, easing: 'easeInQuad'}, 500).promise()
								.done(function(){
									screen4_txt1.delay(2300).animate({opacity: 0, easing: 'easeInQuad'}, 500).promise(),
									screen4_txt2.delay(2300).animate({opacity: 0, easing: 'easeInQuad'}, 500).promise(),
									screen5.delay(4200).css({'display' : 'block'});
									screen5.animate({opacity: 1, easing: 'easeInOutQuad'}, 800).promise(),
									box.delay(4300).animate({width:123,height:112,top:196,right:17,opacity: 1, easing: 'easeInQuad'}, 500).promise(),
									txtbtn.delay(4400).animate({right:-14,opacity: 1, easing: 'easeInQuad'}, 600).promise(),
									logo.delay(4600).animate({opacity: 1, easing: 'easeInQuad'}, 600).promise(),	
									screen5_txt1.delay(4700).animate({opacity: 1, easing: 'easeInQuad',duration: 600}).promise()
									.done(function(){
										shine.css('display','block');
										shine.animate({opacity: 1,left: '72px', easing: 'easeOutExpo'}, 1000).promise(),
										shine.animate({opacity: 0,left: '72px', easing: 'easeOutExpo'}, 800).promise()
										
										txtbtn.delay(1000).animate({zIndex: 2, easing: 'easeInQuad'}, 50).promise()
										
									});
								
								});
							});
						});
					});
				});				
			});
	});	
}

/*function pinpulse()
{
	setInterval( function(){ pin.animate({width:'+=5px'},'slow').delay(200).animate({width:'-=5px'},'slow'); },  intDuration);
}*/
	
/*$.fn.pulseSize = function() {
    var pulseTime = 600,
        pulseDiff = 2;

    this.animate({height:'+='+pulseDiff,
                  width:'+='+pulseDiff},pulseTime*.2,function(){
        $(this).animate({height:'-='+pulseDiff, 
                         width:'-='+pulseDiff},pulseTime*.2,function(){
            $(this).pulseSize();
        });
    });
};
$('.pin').pulseSize();*/
	function ISIscroll(){

        var content = $(".scrollInner"),autoScrollTimer=85000,autoScrollTimerAdjust,autoScroll;

        content.mCustomScrollbar({
            scrollButtons:{enable:true,scrollAmount: 1},
			mouseWheel:{ scrollAmount: 12 },
			// callbacks:{
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


$(".screen1").ready(function(){
	animations();
	
	//imgChange();   
});