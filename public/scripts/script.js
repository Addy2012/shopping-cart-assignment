
// alert('hello')
// var $=jQuery;
jQuery('.carousal-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  // dots: true
});
let ourRequest = new XMLHttpRequest()
ourRequest.open('GET','http://localhost:5000/banners');
ourRequest.onload = function(){
  if(ourRequest.status>=200 && ourRequest.status <400){
    const banners = JSON.parse(ourRequest.response);
    console.log(banners)
  }
  else{
    console.log("Me connected to the server, but it returned an error")
  }
};

ourRequest.onerror = function() {
  console.log("connection error")
}

ourRequest.send()