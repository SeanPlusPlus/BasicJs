var container = document.getElementsByClassName("IFU6qd tNsA5e-yd")[0]
container = container.getElementsByClassName("s-W-Oh")[0];
var imgs = container.getElementsByTagName("img");
var links = "";
var album = document.URL;
for (var i=0,l=imgs.length; i<l; i++) {
  var src = imgs[i].src.replace(/w[0-9]+-h[0-9]+[^\/]+/, "w640-h480");
  links += "<a href="+album+"><img style='padding: 10px 0;' src="+src+" /></a>\n";
}
alert(links);
