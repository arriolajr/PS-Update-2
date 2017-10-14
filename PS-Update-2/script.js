var main = function(){

   (function(){
    var body = $('body');
      $('.menu-toggle').bind('click', function(){
             body.toggleClass('menu-open');
  });
})();
}

$(document).ready(main);
