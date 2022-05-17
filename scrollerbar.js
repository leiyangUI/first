window.onscroll = function () {
    scrollIndicator();
    
}
//la taille totale de contenu
let contentHeight = document.documentElement.scrollHeight;
let displayHeight = document.documentElement.clientHeight;
let height = contentHeight - displayHeight;


function scrollIndicator() {
    let window_scroll = window.scrollY;
    let scrolled = (window_scroll/height)*100;
    document.getElementById('bar').style.width = scrolled +"%";
    
}
