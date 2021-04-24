function openMenu() {
    $("#open-icon").hide()
    $("#nav-menu").fadeIn()
    $(".main-title").hide()
    
    
}

function closeMenu(){
    $("#nav-menu").fadeOut()
    
    setTimeout(() => {
        $("#open-icon").fadeIn()
        $(".main-title").fadeIn()
    }, 500);
}

