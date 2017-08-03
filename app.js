'use strict';

let images = ['./images/computer-setup.png', './images/stack.png', './images/computer-setup.png'];

function insertImages(){

  var ArrayOfImages = [];

  var Image1 = new Image1()
  image1.src = "image1.jpg";

  var Image2 = new Image2()
  Image2.src = "image2.jpg";

  var Image2 = new Image3()
  Image3.src = "image3.jpg";

  let src = document.getElementById('left-content-div');
  let img = document.createElement('img');
  img.src = images;
  src.appendChild(img);
}

insertImages();
