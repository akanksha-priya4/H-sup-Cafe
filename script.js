function changebg(){
    const imgs=['url("5457d6f06d43a0caac1448ea8ee36cba.jpg")','url("5-50808_coffee-wallpaper-hd-coffee.jpg")'];
    const bg=document.getElementById('landing-page');
    const chng=imgs[Math.floor(Math.random()*imgs.length)];
    document.getElementById('landing-page').style.background=chng;
}
setInterval(changebg,700);
