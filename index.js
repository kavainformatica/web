   
   $(document).ready(function()
   {
      $('#wb_Text7').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon4').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon1').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon2').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner2').offset().top }, 600, 'easeOutCirc');
      });
      function onScrollflowerBookmark()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text7', 'puff-in', 0, 500);
         }
      }
      onScrollflowerBookmark();
      $(window).scroll(function(event)
      {
         onScrollflowerBookmark();
      });
      function onScrollBookmark1()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon4', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_FontAwesomeIcon1', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_FontAwesomeIcon2', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_FontAwesomeIcon3', 'animate-fade-in-up', 1500, 1000);
         }
      }
      onScrollBookmark1();
      $(window).scroll(function(event)
      {
         onScrollBookmark1();
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_banner1').css('background-attachment', 'scroll');
      }
      $(window).on('resize', function()
      {
         ResponsiveVideo('banner1-video');
      });
      ResponsiveVideo('banner1-video');
   });
