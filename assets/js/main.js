/* ===================================================================
    
    Author          : Kazi Sahiduzzaman
    Template Name   : Tester - HTML Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).ready( function() {

		/* ==================================================
			Preloader Init
		===============================================*/
		
		$(window).on('load', function() {
			// Animate loader off screen
			$(".preloader").fadeOut("slow");
		});
		
		/* ==================================================
			# Scroll to top
		 =============================================== */
		
        //Get the button
        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
		
		/* ==================================================
			# imagesLoaded active
		===============================================*/
		
		$('.filter-active').imagesLoaded(function () {
			var $filter = '.filter-active',
			$filterItem = '.filter-item',
			$filterMenu = '.filter-menu-active';

			if ($($filter).length > 0) {
				var $grid = $($filter).isotope({
				itemSelector: $filterItem,
				filter: '*',
				masonry: {
						// use outer width of grid-sizer for columnWidth
						columnWidth: 1
					}
				});

				// filter items on button click
				$($filterMenu).on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});

				// Menu Active Class 
				$($filterMenu).on('click', 'button', function (event) {
					event.preventDefault();
					$(this).addClass('active');
					$(this).siblings('.active').removeClass('active');
				});
			}
		})

		
		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		// $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
		// 	type: "iframe",
		// 	mainClass: "mfp-fade",
		// 	removalDelay: 160,
		// 	preloader: false,
		// 	fixedContentPos: false
		// });
		$(document).ready(function() {
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
		
				fixedContentPos: false
			});
		});
		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});
		
		/* ==================================================
		# Quantity
		===============================================*/
		
		function wcqib_refresh_quantity_increments() {
			jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
				var c = jQuery(b);
				c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
			})
		}
		String.prototype.getDecimals || (String.prototype.getDecimals = function() {
			var a = this,
				b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
			return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
		}), jQuery(document).ready(function() {
			wcqib_refresh_quantity_increments()
		}), jQuery(document).on("updated_wc_div", function() {
			wcqib_refresh_quantity_increments()
		}), jQuery(document).on("click", ".plus, .minus", function() {
			var a = jQuery(this).closest(".quantity").find(".qty"),
				b = parseFloat(a.val()),
				c = parseFloat(a.attr("max")),
				d = parseFloat(a.attr("min")),
				e = a.attr("step");
			b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
		});
		
		/* ==================================================
            # Typed
         ===============================================*/
		
		$(".typed").typed({
			strings: ["IT Company ", "Software Company ", "Digital Marketplace "],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 100,
			// time before typing starts
			startDelay: 1200,
			// backspacing speed
			backSpeed: 10,
			// time before backspacing
			backDelay: 600,
			// loop
			loop: true,
			// false = infinite
			loopCount: Infinity,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
		
		
		/* ==================================================
			# Fun Factor Init
		===============================================*/
			$('.timer').countTo();
			$('.fun-fact').appear(function() {
				$('.timer').countTo();
			}, {
				accY: -100
			});
		
		/* ==================================================
			# Wow Init
		 ===============================================*/
		
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
		
		/* ==================================================
			# Swiper Init
		 ===============================================*/
		
		var swiper = new Swiper(".hero-sldr", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
		
    }); // end document ready function
})(jQuery); // End jQuery
// single product swiper
// var swiper = new Swiper(".newSwiper", {
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  dynamicBullets: true,
// 	},
//   });
//   var swiper = new Swiper(".smSwiper", {
// 	spaceBetween: 30,
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  clickable: true,
// 	},
// 	breakpoints: {
// 	  320: {
// 		slidesPerView: 1,
// 	  },
// 	  520: {
// 		slidesPerView: 2,
// 	  },
// 	  768: {
// 		slidesPerView: 3,

// 	  },
// 	  1200: {
// 		slidesPerView: 4,
// 	  },
// 	},
//   });

  var swiper = new Swiper(".bottom-swap", {
	autoplay: {
		delay: 3000,
	  },
	spaceBetween: 10,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
	  320: {
		slidesPerView: 1,
	  },
	  520: {
		slidesPerView: 2,
	  },
	  768: {
		slidesPerView: 3,

	  },
	  1200: {
		slidesPerView: 4,
	  },
	},
  });
//   var swiper = new Swiper(".mySwiper", {
// 	spaceBetween: 10,
// 	slidesPerView: 4,
// 	freeMode: true,
// 	loop:true,
// 	watchSlidesProgress: true,
//   });
//   var swiper2 = new Swiper(".mySwiper2", {
// 	spaceBetween: 10,
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// 	thumbs: {
// 	  swiper: swiper,
// 	},
//   });