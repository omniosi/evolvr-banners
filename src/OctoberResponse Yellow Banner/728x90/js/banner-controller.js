/*/////////////////////////////////////////////////////////////////////////////////////////*/
$(document).ready(function(){
    $("#f5_btn img").hover(function() {
        $(this).attr("src","images/f5_btn_hover.png");
            }, function() {
        $(this).attr("src","images/f5_btn.png");
    });
});


var counter=0;
    var Banner = Banner || function(e) {
            console.log('poo')
        function t(t, a) {
            o(function() {
                n.element = e.getElementById(t), Banner.Loader.init(a), Banner.Loader.onLoadComplete(Banner.BannerController.init)
            })
        }
        var n = {};
        n.element = null;
        var o = function(e, t, n) {
            t = document, n = "addEventListener", t[n] ? t[n]("DOMContentLoaded", e) : window.attachEvent("onload", e)
        };
        return n.init = t, n
    }(document);
    Banner.Loader = function() {
        function e(e) {
            s = e || [], t()
        }

        function t() {
            var e;
            for (e = 0; e < s.length; e++) l[e] = new Image, l[e].src = s[e], l[e].onload = n, c++
        }

        function n() {
            c--, o()
        }

        function o() {
            if (!c)
                for (; d.length > 0;) d.shift()()
        }

        function a(e) {
            d.push(e), o()
        }
        var s, i = {},
            l = [],
            c = 0,
            d = [];
        return i.init = e, i.onLoadComplete = a, i
    }(), Banner.BannerController = function() {
        function e() {
        
            o(), x = l(), p = c(), i(Banner.element, "loaded"), d() && i(Banner.element, "css-animations-enabled"), t(), window.setTimeout(function() {
                a()
            }, 200)
        }

        function t() {
                
                f.loader = document.getElementById("loader"),
                f.bg = document.getElementById("bg"),
                f.isi_img = document.getElementById("isi_img"),                
                f.f1_img1 = document.getElementById("f1_img1"),
                f.f1_txt1 = document.getElementById("f1_txt1"),
                f.f1_txt2 = document.getElementById("f1_txt2"),
                f.patient = document.getElementById("patient"),
                f.f2_img1 = document.getElementById("f2_img1"),
                f.f2_txt1 = document.getElementById("f2_txt1"),
                f.heart_sign = document.getElementById("heart_sign"),
                f.f3_img1 = document.getElementById("f3_img1"),
                f.f3_txt1 = document.getElementById("f3_txt1"),
                f.white_patch = document.getElementById("white_patch"),
                f.cross_sign = document.getElementById("cross_sign"),
                f.f4_img1 = document.getElementById("f4_img1"),
                f.f4_txt1 = document.getElementById("f4_txt1"),
                f.f4_txt2 = document.getElementById("f4_txt2"),
                f.green_patch = document.getElementById("green_patch"),
                f.epipen_pack = document.getElementById("epipen_pack"),         
                f.f5_btn = document.getElementById("f5_btn"),
                f.shine = document.getElementById("shine"),
                f.f5_pen = document.getElementById("f5_pen"),
                f.logo = document.getElementById("logo"),
                f.footer_container = document.getElementById("footer_container"),
                TweenLite.ticker.lagSmoothing(0);

                }
        function n(e) {
            if (!y) return void s(2, e);
            switch (e) {
                case "start-screen":                    
                    for (var t in f) f.hasOwnProperty(t) && f[t].setAttribute("style", "");
                   
                    TweenLite.to(Banner.element, 0, {
                        css: {
                            opacity: 1
                        }
                    }),TweenLite.to(f.loader, 0, {
                        css: {
                            opacity:0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.isi_img, 0.5, {
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.green_patch, 0, {
                        delay: 0.1,
                        css: {
                            display: 'block'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.patient, 0, {
                        delay: 0.1,
                        css: {
                            display: 'block'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.footer_container, 0.5, {
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_txt1, 0.5, {
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_txt2, 2, {
                        delay: 0.5,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f2_img1, 0, {
                        css: {
                            opacity: 0.7,
                            scale: 0.7,
                            left: '217px'
                        },
                        ease: "Power4.easeInOut"
                    }), s(2.5, "frame2");
                    
                break;
                
                case "frame2":
                    TweenLite.to(f.heart_sign, 1, {
                        delay: 1.1,
                        css: {
                            opacity: 0,              
                            scale: 0.6
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_img1, 0.2, {
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.patient, 0, {
                        delay: 0.5,
                        css: {
                            display: 'none'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.green_patch, 0, {
                        delay: 0.5,
                        css: {
                            display: 'none'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_txt2, 1, {
                        delay: 0.5,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f2_txt1, 1.5, {
                        delay: 1,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_img1, 1, {
                        delay: 0.5,
                        css: {                 
                            left: '340px',
                            opacity: 0.7,
                            scale: 0.7,
                            top: '59px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f2_img1, 1, {
                        delay: 0.5,
                        css: {
                            left: '279px',
                            opacity: 1,
                            scale: 1,
                            top: '2px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f3_img1, 1, {
                        delay: 0.6,
                        css: {
                            opacity: 0.7,
                            scale: 0.7,
                            left: '217px',
                            top: '-52px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 1.3,
                        css: {
                            opacity: 1,   
                            scale: 0.7
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 1.6,
                        css: {                
                            scale: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 1.9,
                        css: {
                            scale: 0.6
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 2,
                        css: {
                            opacity: 1,
                            scale: 0.7
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 2.3,
                        css: {                            
                            scale: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 2.6,
                        css: {
                            scale: 0.6
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 2.9,
                        css: {
                            opacity: 1,
                            scale: 0.7
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 3.2,
                        css: {
                            scale: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.heart_sign, 1, {
                        delay: 3.5,
                        css: {               
                            scale: 0.7
                        },
                        ease: "easeOutExpo"
                    }), s(3.5, "frame3");
                    
                break;                
                case "frame3":
                    TweenLite.to(f.heart_sign, 1, {                        
                        css: {                           
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_txt1, 1, {
                        delay: 1,
                        css: {
                            top: '22px'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f2_txt1, 1, {
                    	delay: 0.6,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f3_txt1, 1, {
                        delay: 1.2,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f1_img1, 1, {
                        delay: 0.5,
                        css: {                 
                            top: '77px',
                            left: '398px',
                            opacity: 0
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f2_img1, 1, {
                        delay: 0.5,
                        css: {   
                            left: '340px',
                            opacity: 0.7,
                            scale: 0.7,
                            top: '59px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f3_img1, 1, {
                        delay: 0.6,
                        css: {
                            left: '279px',
                            opacity: 1,
                            scale: 1,
                            top: '2px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.white_patch, 0.2, {
                        delay: 1.39,
                        css: {
                            display: 'block'
                        },
                        ease: "linear"
                    }),TweenLite.to(f.cross_sign, 0, {                        
                        delay: 1.45,
                        css: {
                            display: 'none',
                            opacity: 0,
                            scale: 0.4
                        },
                        ease: "linear"
                    }),TweenLite.to(f.cross_sign, 0.2, {                        
                        delay: 1.5,
                        css: {
                            opacity: 1,                     
                            display: 'block',
                            scale: 0.5
                        },
                        ease: "linear"
                    }),TweenLite.to(f.cross_sign, 1.8, {
                        delay: 1.7,
                        css: {
                            rotationY: 360,
                            scale: 0.55
                        },
                        ease: "linear"
                    }),TweenLite.to(f.f4_img1, 1, {
                        delay: 0.6,
                        css: {
                            opacity: 0.7,
                            scale: 0.7,
                            left: '217px',
                            top: '-52px'
                        },
                        ease: "Power4.easeInOut"
                    }), s(3.5, "frame4");
                break;
                case "frame4":
                    TweenLite.to(f.f1_txt1, 1, {
                        delay: 0.5,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f3_txt1, 1, {
                        delay: 0.5,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.white_patch, 0, {
                        delay: 0.7,
                        css: {
                            display: 'none'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.cross_sign, 0, {
                        delay: 0.7,
                        css: {
                            opacity: 0,                     
                            display: 'none'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f4_txt1, 1.3, {
                        delay: 1,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f4_txt2, 1.3, {
                        delay: 1,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f2_img1, 1, {
                        delay: 0.5,
                        css: {      
                            top: '77px',
                            left: '398px',
                            opacity: 0
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f3_img1, 1, {
                        delay: 0.5,
                        css: {
                            left: '340px',
                            opacity: 0.7,
                            scale: 0.7,
                            top: '59px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f4_img1, 1, {
                        delay: 0.6,
                        css: {                            
                            left: '279px',
                            opacity: 1,
                            scale: 1,
                            top: '2px'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.f4_img1, 0, {
                        delay: 1.6,
                        css: {
                            opacity: 0,
                            display: 'none'
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.green_patch, 0, {
                        delay: 1.6,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.green_patch, 0, {
                        delay: 1.6,
                        css: {
                            opacity: 1,
                            top: '2px',
                            display: 'block'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.epipen_pack, 0, {
                        delay: 1.6,
                        css: {
                            opacity: 1,
                            display: 'block',
                            width: '73px',
                            height: '74px'

                        },
                        ease: "linear"
                    }),TweenLite.to(f.epipen_pack, 1.3, {
                        delay: 1.7,
                        css: {
                            rotation: '-180px'               
                        },
                        ease: "linear"
                    }),TweenLite.to(f.epipen_pack, 1.6, {
                        delay: 2.3,
                        css: {
                            rotation: '180px'    
                        },
                        ease: "linear"
                    }),TweenLite.to(f.epipen_pack, 0.8, {
                        delay: 2.8,
                        css: {
                            rotation: '-80px'
                        },
                        ease: "linear"
                    }), s(4, "frame5");
                    
                break;
                    
                case "frame5":
                    TweenLite.to(f.green_patch, 0.6, {
                        delay: 0.8,
                        css: {
                            opacity: 0,
                            display: 'none'                            
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.epipen_pack, 0.4, {
                        delay: 0.8,
                        css: {
                            opacity: 0,
                            display: 'none'                 
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f4_txt1, 1, {
                        delay: 0.8,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f4_txt2, 1, {
                        delay: 0.8,
                        css: {
                            opacity: 0
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f3_img1, 1, {
                        delay: 0.5,
                        css: {
                            opacity: 0
                        },
                        ease: "Power4.easeInOut"
                    }),TweenLite.to(f.logo, 2, {
                        delay: 1.2,
                        css: {
                            opacity: 1
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.f5_btn, 1, {
                        delay: 1.4,
                        css: {
                            opacity: 1,
                            display: 'block',
                            top: '14px'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.shine, 2.5, {
                        delay: 1.6,
                        css: {
                            opacity: 1,
                            display: 'block',
                            top: '-70px'
                        },
                        ease: "easeOutExpo"
                    }),TweenLite.to(f.shine, 1, {
                        delay: 2,
                        css: {
                            opacity: 0,
                        },
                        ease: Power4.easeOut
                    }),TweenLite.to(f.f5_pen, 1, {
                        delay: 1.9,
                        css: {
                            opacity: 1,
                            display: 'block',
                            left: '137px'

                        },
                        ease: "easeOutExpo"
                    }), s(4, "frame6");
                    
                break;
                case "restart":
                    
                break;
            }
            m = e
        }

        function o() {
            function e(e) {
                y = "visible" === document[o]
            }

            function t(e) {
                y = !0
            }

            function n(e) {
                y = !1
            }
            var o, a = "hidden";
            a in document ? (document.addEventListener("visibilitychange", e), o = "visibilityState") : (a = "mozHidden") in document ? (document.addEventListener("mozvisibilitychange", e), o = "mozVisibilityState") : (a = "webkitHidden") in document ? (document.addEventListener("webkitvisibilitychange", e), o = "webkitVisibilityState") : (a = "msHidden") in document ? (document.addEventListener("msvisibilitychange", e), o = "msVisibilityState") : "onfocusin" in document ? (document.onfocusin = t, document.onfocusout = n) : (window.onpageshow = window.onfocus = t, window.onpagehide = window.onblur = n)
        }

        function a() {
            i(Banner.element, "started"), n("start-screen")
        }

        function s(e, t) {
            u = window.setTimeout(function() {
                n(t)
            }, 1e3 * e)
        }

        function i(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        }

        function l() {
            var e = document.body || document.documentElement,
                t = e.style,
                n = "transition";
            if ("string" == typeof t[n]) return !0;
            var o = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            n = n.charAt(0).toUpperCase() + n.substr(1);
            for (var a = 0; a < o.length; a++)
                if ("string" == typeof t[o[a] + n]) return !0;
            return !1
        }

        function c() {
            var e = document.body || document.documentElement,
                t = e.style,
                n = "transform";
            if ("string" == typeof t[n]) return !0;
            var o = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
            n = n.charAt(0).toUpperCase() + n.substr(1);
            for (var a = 0; a < o.length; a++)
                if ("string" == typeof t[o[a] + n]) return !0;
            return !1
        }

        function d() {
            return p && x
        }
        var u, r = {},
            x = !0,
            p = !0,
            m = "",
            y = !0,
            f = {};
        return r.init = e, r.play = a, r.next = s, r.playPhase = n, r.doCSSAnim = d, r
    }();