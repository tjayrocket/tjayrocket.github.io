'use strict';

var leftDiv = document.getElementById('left-side-block');
var centerDiv = document.getElementById('center-block');
var rightDiv = document.getElementById('right-side-block');


function postLeftInfo(){
  var leftTitle = document.createElement('h1');
  leftTitle.setAttribute('id', 'left-title');
  leftTitle.appendChild(document.createTextNode('About Me'));
  var moreToCome = document.createElement('h1');
  moreToCome.setAttribute('id', 'more-to-come-left');
  moreToCome.appendChild(document.createTextNode('More To Come...'));
  var tjayPic = new Image();
  tjayPic.src = 'images/tjaysitepic2.png'
  leftDiv.appendChild(leftTitle);
  leftDiv.appendChild(tjayPic);
  leftDiv.appendChild(moreToCome);
}

postLeftInfo();

function postCenterInfo(){
  var centerTitle = document.createElement('h1');
  centerTitle.setAttribute('id', 'center-title');
  centerTitle.appendChild(document.createTextNode('Developer'));
  var moreToCome = document.createElement('h1');
  moreToCome.setAttribute('id', 'more-to-come-center');
  moreToCome.appendChild(document.createTextNode('More To Come...'));
  var compPic = new Image();
  compPic.src = 'images/computer-setup.png'
  centerDiv.appendChild(centerTitle);
  centerDiv.appendChild(compPic);
  centerDiv.appendChild(moreToCome);
}

postCenterInfo();

function postRightInfo(){
  var rightTitle = document.createElement('h1');
  rightTitle.setAttribute('id', 'right-title');
  rightTitle.appendChild(document.createTextNode('Musician'));
  var moreToCome = document.createElement('h1');
  moreToCome.setAttribute('id', 'more-to-come-right');
  moreToCome.appendChild(document.createTextNode('More To Come...'));
  var stackPic = new Image();
  stackPic.src = 'images/stack.png'
  rightDiv.appendChild(rightTitle);
  rightDiv.appendChild(stackPic);
  rightDiv.appendChild(moreToCome);
}

postRightInfo();


var twitter = document.getElementById('twitter-icon');
var facebook = document.getElementById('fb-icon');
var linkedIn = document.getElementById('li-icon');
var github = document.getElementById('gh-icon');
var twitch = document.getElementById('twitch-icon');
var reverbnation = document.getElementById('rn-icon');
