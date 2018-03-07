document.getElementById('clos').onclick = closedd;
function closedd () {
document.getElementById('zatemnenie').style.display = "none";
}

var imgId = false;
document.getElementById('home').onclick = img;
function img () {
  if (window.imgId == false){
  document.getElementById('home').style.backgroundImage = "url(back1.png)";
  window.imgId = true;
  } 
  else {
  document.getElementById('home').style.backgroundImage = "url(back.png)"; 
  window.imgId = false;   
  }
}


/* http://imapo.ru/category/%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D1%8B-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0/page/12/ */