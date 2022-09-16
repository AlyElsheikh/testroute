let nav = document.getElementsByClassName('navbar')[0];

window.onscroll = function () {
    if(scrollY > 140){
        nav.style.backgroundColor = "#ccc";
        nav.style.margin = "0";

    }else{
        nav.style.backgroundColor = "transparent";
        nav.style.margin = "30px 0 0 0";
    }
}

