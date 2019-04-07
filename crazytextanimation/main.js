$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend


  $('p').each(function(index, el) {
    var html = $(el).html().trim();
    var newhtml = html.split(' ').map(function(word) {
      return `<span>${word}</span> `;
    });
    $(el).html(newhtml);
  });



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  var baseColors = ['blue', 'green', 'red', 'brown', 'orange', 'yellow', 'white', 'cyan'];
  // var baseColors = ['rgb(10,10,10)', 'rgb(100,100,100)', 'rgb(255,50,2)'];

  var getRandColor = function(colors) {
    var randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
  };


  var curBgColor = null;
  var restColors = null;

  var getAllNonBgCols = function() {
    return baseColors.filter(function(color) {
      return color != curBgColor;
    });
  };

  var getNewBgCol = function() {
    return getRandColor(getAllNonBgCols());
  };



  var changeBG = function() {

      curBgColor = 'white' || getNewBgCol();
      restColors = getAllNonBgCols();
      $('body').css('background-color', curBgColor);

  };

  changeBG();
  // setInterval(changeBG, 1000);


  var animateSpan = function($el) {

    var newColor = getRandColor(restColors);
    //console.log(newColor);

    var opacity = (Math.random() > 0.7) ? Math.random() * 0.8 : 0.9;
    $el.css('background-color', newColor, 1000);
    $el.stop().animate({
      top: (Math.random() * 115) - 30 + '%',
      left: (Math.random() * 145) - 30 + '%',
      opacity: opacity
      // fontSize: (Math.random() * 100) + 'vh',
    }, Math.random() * 20000, function() {
      $(this).css('z-index', Math.round(Math.random() * 100) + '');
      // if (Math.random() > 0.9) {
      //   $(this).css('filter', "blur(1px)");
      // }
      animateSpan($(this));
    });

  };



    setTimeout(function() {


          $('span').each(function(index, el) {
            $(el).show();
            animateSpan($(el));
          });



    }, 2000);







});
