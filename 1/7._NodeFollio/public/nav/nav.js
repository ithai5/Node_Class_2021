function openMenu() {
    $("#open-icon").hide()
    $("#nav-menu").fadeIn()
    
    
}

function closeMenu(){
    $("#nav-menu").fadeOut()
    setTimeout(() => {
        $("#open-icon").fadeIn()
    }, 500);
}

console.log(document.getElementsByClassName("main-title"))