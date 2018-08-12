function removeAdblock() {
  $('body').css({ overflow: 'scroll' });
  $('#detecta-adblock').hide();
  console.log('énois manés');
}

$(window).bind("load", function() {
  removeAdblock();
});
