var images = require("images");
var path = require("path");
var imageDir = path.join(__dirname,"images/");
var inputImgDir = path.join(__dirname,"images/input/");
var outputImgDir = path.join(__dirname,"images/output/");
var fs = require("fs");


var width = 1000,height = 800;
var mark = images(imageDir+"watermark.png");
var markWidth = mark.width();
var markHeight = mark.height();

var wNum = Math.ceil(width / markWidth);
var hNum = Math.ceil(height / markHeight);

var image = images(width,height);

for(var i = 0;i<hNum;i++){
	for (var j = 0; j < wNum; j++) {
		image.draw(mark,i*(100+markWidth),j*(100+markHeight));
	};
}

image.save(imageDir+"mark.png",{quality:100})
