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
txtbtn2 = $('.txtbtn2'),
framebtn = $('.framebtn'),
txtbtnhover = $('.txtbtnhover'),
scrollBlock = $('.scrollBlock'),
smallText = $('.smallText'),
screen4Bg = $('.screen4Bg'),
frame4_footer_text = $('.frame4_footer_text'),
shine = $('.shine'),
scroll_content_title = $('.scroll-content-title')
consider = $('.consider'),
durationSlide = 4000;

function animations(){
	$.when(
		//loader.animate({opacity: 0, easing: 'easeInQuad'}, 1000).promise()
		loaderWrapper.animate({opacity: 1, easing: 'easeInQuad'}, 1000).promise()
	 ).done(function(){
			screen1.animate({opacity: 0.95, easing: 'easeInQuad'}, 1000).delay(3000).promise()
			.done(function(){
				screen2.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
				clock1.animate({opacity: 0.35, easing: 'easeOutQuad'}, 350).promise(),
				screen1.delay(500).animate({top: 17, easing: 'easeInQuad'}, 500).promise(),
				screen2_txt2.delay(800).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
				clock2.delay(900).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock11.delay(1100).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock3.delay(1300).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock5.delay(1500).animate({opacity: 0.65, easing: 'easeOutQuad'}, 350).promise(),
				clock8.delay(1700).animate({opacity: 0.9, easing: 'easeOutQuad'}, 350).promise(),
				clock10.delay(1950).animate({opacity: 0.4, easing: 'easeOutQuad'}, 350).promise()
				//more clocks
				.done(function(){
					screen2.delay(6500).animate({opacity:0, easing: 'easeInQuad'}, 600).promise()

					.done(function(){
						screen3.css({'display' : 'block'});
						screen3.animate({opacity: 1, easing: 'easeInQuad'}, 200).promise(),
						pin1.animate({top:23,opacity:0.4,easing: 'easeOutBounce'},1000).promise(),
						pin2.delay(600).animate({top:44,opacity:0.6, easing: 'easeOutBounce'}, 1000).promise(),
						pin7.delay(900).animate({top:-31,opacity:0.6, easing: 'easeOutBounce'}, 1000).promise(),
						pin4.delay(1000).animate({top:41,opacity:0.6, easing: 'easeOutBounce'}, 1000).promise(),
						pin5.delay(1200).animate({top:57,opacity:0.6, easing: 'easeOutBounce'}, 8100000).promise(),
						screen3_txt2.delay(1500).animate({opacity: 0.95, easing: 'easeInQuad'}, 2500).promise(),
						pin3.delay(1500).animate({top:11,opacity:0.8, easing: 'easeOutBounce'}, 1000).promise(),
						pin8.delay(1700).animate({top:7,opacity:0.8, easing: 'easeOutBounce'}, 1000).promise()
						.done(function(){
							screen3.delay(5000).animate({opacity:0, easing: 'easeInQuad'}, 600).promise(),
							screen1.delay(5000).animate({opacity:0, easing: 'easeInQuad'}, 700).promise()
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
								box.delay(800).animate({top: 13,opacity: 1, easing: 'easeInQuad'}, 500).promise()
								.done(function(){
									screen4_txt1.delay(2300).animate({opacity: 0, easing: 'easeInQuad'}, 500).promise(),
									screen4_txt2.delay(2300).animate({opacity: 0, easing: 'easeInQuad'}, 500).promise(),
									screen5.delay(4200).css({'display' : 'block'});
									screen5.animate({opacity: 1, easing: 'easeInOutQuad'}, 800).promise(),
									box.delay(4300).animate({width:141,height:65,top:6,right:302,opacity: 1, easing: 'easeInQuad'}, 500).promise(),
									txtbtn.delay(4400).animate({top:57,opacity: 1, easing: 'easeInQuad'}, 600).promise(),
									logo.delay(4600).animate({opacity: 1, easing: 'easeInQuad'}, 600).promise(),	
									screen5_txt1.delay(4700).animate({opacity: 1, easing: 'easeInQuad',duration: 600}).promise()
									.done(function(){
										shine.css('display','block');
										shine.animate({opacity: 1,left: '401px', easing: 'easeOutExpo'}, 700).promise(),
										shine.animate({opacity: 0,left: '401px', easing: 'easeOutExpo'}, 50).promise()
										/*.done(function(){*/
										txtbtn2.delay(750).animate({opacity: 1, easing: 'easeOutExpo'}, 50).promise()
										/*});*/
									});
								});
							});
						});
					});
				});				
			});
	});	
}
//var isSafari = navigator.vendor.indexOf("Apple")==0 && /\sSafari\//.test(navigator.userAgent); // true or false
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari)
			{
				console.log("safari");
				scroll_content_title.css("font-size","9px");
			}

//var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

//if (isChrome) alert("You are using Chrome!");
//if (isSafari) alert("You are using Safari!");
                                       
//var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
			//if(navigator.userAgent.toLowerCase().indexOf('safari') > -1)
			
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