bannerFlag=false;
categoriesFlag=false;
productFlag=false;
class Server{
    constructor(banners,categories,products){}
    banners=[];
    categories=[];
    product=[];
    setProducts(){
        console.log("hello from set Product")
        let ourRequest = new XMLHttpRequest()
        ourRequest.open('GET','http://localhost:5000/products');
        ourRequest.onload = function(){
        if(ourRequest.status>=200 && ourRequest.status <400){
            this.product=JSON.parse(ourRequest.response);
            productFlag=true
        }
        else{
            console.log("Me connected to the server, but it returned an error")
        }
        };
        ourRequest.onerror = function() {
        console.log("connection error")
        }
        ourRequest.send()                
    }
    setCategories(){
        console.log("hello from set categories")
        let ourRequest = new XMLHttpRequest()
        ourRequest.open('GET','http://localhost:5000/categories');
        ourRequest.onload = function(){
        if(ourRequest.status>=200 && ourRequest.status <400){
            this.categories=JSON.parse(ourRequest.response);
            categoriesFlag=true
        }
        else{
            console.log("Me connected to the server, but it returned an error")
        }
        };
        ourRequest.onerror = function() {
        console.log("connection error")
        }
        ourRequest.send()        
    }
    getCategories(){
        console.log(this.categories)
    }
    set banner(banner) {
        this.banners = banner;
      }
    setBanners(){
        console.log("hello from set banners")
        let ourRequest = new XMLHttpRequest()
        ourRequest.open('GET','http://localhost:5000/banners');
        ourRequest.onload = function(){
        if(ourRequest.status>=200 && ourRequest.status <400){
            Server.banner=JSON.parse(ourRequest.response);
            console.log(Server.banner)
            bannerFlag=true
        }
        else{
            console.log("Me connected to the server, but it returned an error")
        }
        };
        ourRequest.onerror = function() {
        console.log("connection error")
        }
        ourRequest.send()
    }
    getBanners(){
        console.log("i am at get banner")
        console.log(this)
    }
}
console.log("hello from servers")
const server=new Server;
server.setBanners()
server.setCategories()
server.setProducts()
function renderFunction(){
  renderBanner = setTimeout(conditionRenderBanner, 1500);
//   renderCategories = setInterval(conditionRenderCategories, 1000);
//   renderProduct = setInterval(conditionRenderProduct, 1000);
}
function conditionRenderBanner(){
    console.log("hello from conditionRenderBanner")
    if(bannerFlag){
        server.getBanners();
    }
}
renderFunction()
// server.getBanners()