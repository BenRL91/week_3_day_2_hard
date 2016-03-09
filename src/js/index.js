// Javascript Entry Point

//If i click the next button i want the next picture in the array
// to fade in, and the previous item in the array to fade out
import $ from 'jquery';
var carouselImages = [
  {
    image_url: 'https://www.kickingdesigns.com/wp-content/uploads/2012/09/hot-air-balloon-9-24-2012_hd-720p.jpg',
    title: 'Upon Descent',
    photographer_id: 'Phil2001'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
    title: 'Sunset in the Cascades',
    photographer_id: 'smpoutdoors'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
    title: 'Seljalandsfoss, Iceland',
    photographer_id: 'Robin Kamp'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
    title: 'Gods Rays',
    photographer_id: 'illuminati'
  }
];

var img1 = document.querySelector(".cur_img");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var credits = document.querySelector(".creds");

var titles = carouselImages.map(function(obj){
	return obj.titlel})
var photoID = carouselImages.map(function(obj){
	return obj.photographer_id})
var links = carouselImages.map(function(obj){
	return obj.image_url})

	var x = 0

function prevImg(){
img1.style.backgroundImage = "url(" + links[x] + ")"
	--x
// var cred = titles[x]
// 	--x
// var ID = photoID[x]
// credits.textContent = cred + " " + ID
	if (x < 0){x = 3}

};
function nextImg(){
img1.style.backgroundImage = "url(" + links[x] + ")"
// img1.style.backgroundImage = "url(" + links[x] + ")"
// 	++x
// img1.style.backgroundImage = "url(" + links[x] + ")"
	++x
	if (x > 3){ x = 0} 


};
prevBtn.addEventListener('click',prevImg);
nextBtn.addEventListener('click', nextImg);

// $ (".cur_img").on('click', function() {
//   $(".cur_img").removeClass('fadeIn');
// });
// $ (".cur_img").on('click', function() {
//   $(".cur_img").addClass('fadeIn');
// });


