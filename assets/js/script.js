'use strict';



$(document).ready(function() {
 
  $("#owl-quotes").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
	   slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,
	  
	navigation : true,
    navigationText : ["<i class='de-icon-left-open-big'></i>","<i class='de-icon-right-open-big'></i>"],
	 pagination : false,
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [991,1]
	  
	  
 
  });
 
});

	
	
$(document).ready(function() {
		
	// 01. BROWSER AGENT FUNCTION		
	//==================================================================================
	
	// 01.1 Check Chrome (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
				return 1;
			}
		}
	}
	
	// 01.2 Check IOS
	//----------------------------------------------------------------------------------
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	
	// 01.3 Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// 01.4 Check IE (< IE10)
	//----------------------------------------------------------------------------------
	var isIE = function isIE() {
 		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.5 Check IE11
	//----------------------------------------------------------------------------------
	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.6 Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	// 01.7 Check IE10
	//----------------------------------------------------------------------------------
	var isIE10 = function isIE10() {
 		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.8 Check IE9
	//----------------------------------------------------------------------------------
	var isIE9 = function isIE9() {
 		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.9 Check Safari/Chrome Mac
	//----------------------------------------------------------------------------------
	var isSafari = function isSafari() {
	 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
   		 	return 1;
		}
	}
		
	
	// 02. FULLSCREEN CLASS		
	//==================================================================================
	var fullscreen = function(){
		var fheight = $(window).height();
		$('.fullscreen').css("height",fheight);		
	}
	
	//Execute on load
	fullscreen();
		
	//Execute on window resize
	$(window).resize(function() {	
		fullscreen();	
	});
	
	// 03. HIDDEN ALL ANIMATION CLASS
	//==================================================================================
	// Waypoint will animate it later (04.5 Waypoint Animate CSS)
	if( !device.tablet() && !device.mobile() && !isIE9() ) {
			$('.animation').css({
				visibility: 'hidden'
			});	
	}
			
	// 04. PACE PRELOADER
	//==================================================================================
	Pace.on('done', function () {
		$('#preloader').hide();
	});
	
	Pace.on('hide', function () {
		
		// 04.1 Gallery - Masonry
		//------------------------------------------------------------------------------
		var $gallery = $('#masonry-gallery');
			
		if (device.tablet() || device.mobile()) {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: 0,
			});
		}
		else
		{
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: "1s",
			});
		}
			
		
		// 04.2 Nav Header Position (Mobile)
		//------------------------------------------------------------------------------
		if (device.tablet() || device.mobile()) {
			if ($("#nav-bar").hasClass("sticky-nav")) {
				$("#nav-header").css("position","relative");
			}
		}
		
		// 04.3 Waypoint Sticky Navbar
		//------------------------------------------------------------------------------		
		if ($("#nav-bar").hasClass("sticky-nav")){
			
			// 04.3.1 Top Bar
			if ($("#nav-bar").hasClass("top-bar")){
			
	 			var nav_header_waypoint = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							$("#nav-bar").addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							$("#nav-bar").addClass("stick-it");
						}
					}
					else {
						$("#nav-bar").removeClass("stick-it animated fadeInDownBig");
					}
				
				}, {
  					offset:'-100%'
				});
			}
			
			// 04.3.2 Bottom Bar
			else if  ($("#nav-bar").hasClass("bottom-bar")){
				
				var waypoints = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							$("#nav-bar").addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							$("#nav-bar").addClass("stick-it");
						}
					}
					else if (direction === 'up') {
						$("#nav-bar").removeClass("stick-it animated fadeInDownBig");
					}
						
				}, {
  					offset:'-145px'
				});		
			}
			
		}
		
		// 04.4 Waypoint Sticky Menu Icon (Sidebar Version)
		//------------------------------------------------------------------------------
		
		var sticky_menuicon_waypoint = $('#menu-icon').waypoint(function(direction) {
			if (direction === 'down') {
				$('#sticky-menuicon').show();
			}
			else {
				$('#sticky-menuicon').hide();
			}
			
		}, {
  			offset:'-100%'
		})
			
			
		// 04.5 Waypoint Animate CSS
		//------------------------------------------------------------------------------
		if( !device.tablet() && !device.mobile() && !isIE9() ) {	
			$('.animation').each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' });
						$(this.element).addClass('animated');
            			},
            			offset: '90%'
        			});
        	});
			
		}		
		
		// 04.6 Stellar Parallax
		//------------------------------------------------------------------------------
	 	if( !device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari() ) {
			$(".image-divider").css("background-attachment","fixed");
		 	$(window).stellar({
			 	horizontalScrolling: false,
				responsive: true,
		 	});
	 	}
	 		 
	}); // END of Pace on Hide
	
	
	
	
	// 06. BIND TOUCH FOR PHOTO ITEM (Mobile / Tablet)
	//==================================================================================
	$('.photo-item').bind('touchstart touchend', function(e) {
	});	
		
	
		 
	// 08. MOBILE MENU
	//==================================================================================
	$("#mobile-nav").click(function(e){
		e.preventDefault()
		$("#nav-menu").toggleClass("open");
	});
	
	$("#more-nav").click(function(e){
		e.preventDefault()
		$("#mobile-hide").toggleClass("open");
	});
	

	 	 
	// 09. DOUBLE TAP DROP DOWN MENU
	//==================================================================================
	if ($(window).width() > 991){
		$( '#nav-menu' ).doubleTapToGo();
	}	 

if ($(window).width() > 991){
		$( '#mobile-hide' ).doubleTapToGo();
	}	 



	
	
	 	 
	

	
	
		
		
	
	 
	// SMOOTH SCROLL
	//=========================================================================
	$('a.smooth-scroll').smoothScroll({
		speed: 1000,
	});	 
	 
	$('.nav-smooth-scroll a').smoothScroll({
		speed: 1000,
		offset: -80,
	});	
	 
	// 13. MAGNIFIC POPUP
	//==================================================================================
	
	// 13.1 Magnific Zoom
	//----------------------------------------------------------------------------------
	$('.magnific-zoom').magnificPopup({
 		type: 'image',
		image: {
    		// options for image content type
    		titleSrc: 'title'
 		},
		//fixedContentPos:true,
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
    		}
  		},
	});
	
	//  Magnific Zoom Gallery
	//----------------------------------------------------------------------------------	
	$('.magnific-zoom-gallery').magnificPopup({
 		type: 'image',
		image: {
    		// options for image content type
    		titleSrc: 'title'
 		},
		gallery: {
         	 enabled:true
        },
		//fixedContentPos:true,
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
    		}
  		},
	});	 
	 
	// MAGNIFIC AJAX
	//==================================================================================
	$('.magnific-ajax').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		afterClose: function() {
      			// Will fire when popup is closed
				
    		}
  		},
	});		
	 
	// 14. DISALBE TRANSITION (Mobile / Tablet)
	//==================================================================================
	if( device.tablet() || device.mobile() ) {
		if (!isIE11desktop()){
			// de-icon
			$(".de-icon, .de-icon i").css("transition","none");
		
			// Photo-item		 
			$(".photo-item img.hover-animation").css("transition","none");
			$(".photo-item .layer.hover-animation").css("transition","none"); 
		 }
	 }
	 
	 
	
	
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 375
        }, 500);
        return false;
      }
    }
	
  });
});	 
});

! function(e) {
  var t = function(t, n) {
    this.$element = e(t), this.type = this.$element.data("uploadtype") || (this.$element.find(".thumbnail").length > 0 ? "image" : "file"), this.$input = this.$element.find(":file");
    if (this.$input.length === 0) return;
    this.name = this.$input.attr("name") || n.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), this.$hidden.length === 0 && (this.$hidden = e('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileupload-preview");
    var r = this.$preview.css("height");
    this.$preview.css("display") != "inline" && r != "0px" && r != "none" && this.$preview.css("line-height", r), this.original = {
      exists: this.$element.hasClass("fileupload-exists"),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }, this.$remove = this.$element.find('[data-dismiss="fileupload"]'), this.$element.find('[data-trigger="fileupload"]').on("click.fileupload", e.proxy(this.trigger, this)), this.listen()
  };
  t.prototype = {
    listen: function() {
      this.$input.on("change.fileupload", e.proxy(this.change, this)), e(this.$input[0].form).on("reset.fileupload", e.proxy(this.reset, this)), this.$remove && this.$remove.on("click.fileupload", e.proxy(this.clear, this))
    },
    change: function(e, t) {
      if (t === "clear") return;
      var n = e.target.files !== undefined ? e.target.files[0] : e.target.value ? {
        name: e.target.value.replace(/^.+\\/, "")
      } : null;
      if (!n) {
        this.clear();
        return
      }
      this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
      if (this.type === "image" && this.$preview.length > 0 && (typeof n.type != "undefined" ? n.type.match("image.*") : n.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader != "undefined") {
        var r = new FileReader,
          i = this.$preview,
          s = this.$element;
        r.onload = function(e) {
          i.html('<img src="' + e.target.result + '" ' + (i.css("max-height") != "none" ? 'style="max-height: ' + i.css("max-height") + ';"' : "") + " />"), s.addClass("fileupload-exists").removeClass("fileupload-new")
        }, r.readAsDataURL(n)
      } else this.$preview.text(n.name), this.$element.addClass("fileupload-exists").removeClass("fileupload-new")
    },
    clear: function(e) {
      this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", "");
      if (navigator.userAgent.match(/msie/i)) {
        var t = this.$input.clone(!0);
        this.$input.after(t), this.$input.remove(), this.$input = t
      } else this.$input.val("");
      this.$preview.html(""), this.$element.addClass("fileupload-new").removeClass("fileupload-exists"), e && (this.$input.trigger("change", ["clear"]), e.preventDefault())
    },
    reset: function(e) {
      this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.original.exists ? this.$element.addClass("fileupload-exists").removeClass("fileupload-new") : this.$element.addClass("fileupload-new").removeClass("fileupload-exists")
    },
    trigger: function(e) {
      this.$input.trigger("click"), e.preventDefault()
    }
  }, e.fn.fileupload = function(n) {
    return this.each(function() {
      var r = e(this),
        i = r.data("fileupload");
      i || r.data("fileupload", i = new t(this, n)), typeof n == "string" && i[n]()
    })
  }, e.fn.fileupload.Constructor = t, e(document).on("click.fileupload.data-api", '[data-provides="fileupload"]', function(t) {
    var n = e(this);
    if (n.data("fileupload")) return;
    n.fileupload(n.data());
    var r = e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
    r.length > 0 && (r.trigger("click.fileupload"), t.preventDefault())
  })
}(window.jQuery)




