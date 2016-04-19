//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){

  var share = $('.j-share');
  var win = $('.ui-openwin-area');
  var openWin = function () {
  	win.removeClass('none');
    $('.ui-openwin-close').removeClass('none');
  }//弹窗打开方法
  var closeWin = function () {
    win.addClass('none');
    $('.ui-openwin-close').addClass('none');
    $('.recommend-tips').removeClass('recommend-tips-show');
  }//弹窗打开方法

  var tabMenu = $('li.ui-tab-menu-cell');
  var tabCnt = $('div.ui-tab-cnt');

  var tabSwitch = function (a) {
    var index = a.parent().index();
    tabMenu.removeClass('ui-tab-menu-active');
    a.parent().addClass('ui-tab-menu-active');
    tabCnt.addClass('none').eq(index).removeClass('none');
  }

  tabMenu.on('tap', '.ui-tab-menu-link', function() {
    tabSwitch($(this));
  });


  share.tap(function() {
    $('.recommend-tips').addClass('recommend-tips-show');
  });
  // var $tabMenu = $('li.ui-tab-menu-cell');
  // var $tabCnt = $('div.eui-tab-cnt');
  // $tabMenu.click(function() {
  //   var index = $(this).index();
  //   $tabMenu.removeClass("eui-tab-menu-active");
  //   $(this).addClass('eui-tab-menu-active');
  //   $tabCnt.hide().eq(index).show();
  // });
  // var $tabMenu = $('li.eui-tab-menu-cell');
  // var $tabCnt = $('div.eui-tab-cnt');
  // $tabMenu.click(function() {
  //   var index = $(this).index();
  //   $tabMenu.removeClass("eui-tab-menu-active");
  //   $(this).addClass('eui-tab-menu-active');
  //   $tabCnt.hide().eq(index).show();
  // });
  $('.j-openwin').tap(function() {
  	// win.removeClass('none').animate(300);
  	//  // setTimeout(function (){
   //  //   	// $('.j-openwin').removeClass('none');
   //    	openWin();
   //  //  }, 700); 
    openWin();
    console.log(0);
  });

  $('.j-close').tap(function() {
  	closeWin();
  })


})