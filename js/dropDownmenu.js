/** @format */

$(document).ready(function () {
  $('ul li').click(function () {
    $('ul ul').slideUp(0);
    $(this).find('ul').slideToggle(0);
  });
});
