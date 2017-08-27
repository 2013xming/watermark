var images = require("images");
var path = require("path");
var imageDir = path.join(__dirname,"images/");
var inputImgDir = path.join(__dirname,"images/input/");
var outputImgDir = path.join(__dirname,"images/output/");
var fs = require("fs");



if(fs.existsSync(inputImgDir)){
	var files = fs.readdirSync(inputImgDir);
	console.log(files);
	files.forEach(function(val,index){
		if(/(.png|.jpg|.gif)/.test(val)){
			var file = inputImgDir+val;
			images(file)
			.size(1000)
			.draw(images(imageDir+"mark.png"),0,0)
			.save(outputImgDir+val,{quality:100})
		}
		
	})
}
