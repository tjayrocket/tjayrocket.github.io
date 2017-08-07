'use strict';

$('#bottom-content-div').hide();
$('#show').fadeIn(500);

$('#show').on('click', function(){
  $('#bottom-content-div').fadeIn(500);
});

$('#about').on('click', function(){
  console.log('about');
});
$('#developer').on('click', function(){
  console.log('developer');
});
$('#music').on('click', function(){
  console.log('musician');
});
