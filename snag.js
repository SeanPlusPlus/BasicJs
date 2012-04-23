var img = document.getElementByClassName("BVks2c tJOOi")[0];
var src = img.src.replace(/s[0-9]+/,"s640");
alert("<table><img src="+src"></table>");

alert("<table style="width:auto;"><tr><td><a href=""><img src="" height="480" width="640" /></a></td></tr><tr><td style="font-family:arial,sans-serif; font-size:11px; text-align:right">From <a href="https://picasaweb.google.com/104608116512003739301/Spring2012?authuser=0&feat=embedwebsite">spring2012</a></td></tr></table>");

var container = document.getElementsByClassName("RazREb ZI35oe")[0];
var imgs = container.getElementsByTagName("img");
var srcs = [];
for (var i=0,l=imgs.length; i<l; i++) {
  srcs.append(imgs[i].src.replace(/w[0-9]+-h[0-9]+[^\/]/, "w640-h480"));
}
