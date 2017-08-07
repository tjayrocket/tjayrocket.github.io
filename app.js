'use strict';

$('#bottom-content-div').hide();

$('#show').on('click', function(){
  console.log('Yep');
  $('#bottom-content-div').fadeIn(500);
});
