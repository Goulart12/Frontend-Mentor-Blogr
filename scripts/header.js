function productButton() {
    navMenu1.style.display = "flex"
    document.getElementsById('firstMenuItem').innerHTML = '<button type="button" class="main-menu-btn" onclick="productButtonAtivado()">Product<img src="/images/icon-arrow-light.svg" alt=""></button>'
}

function productButtonAtivado() {
    navMenu1.style.display = "none"
    document.getElementsById('firstMenuItem').innerHTML = '<button type="button" class="main-menu-btn" onclick="productButton()">Product<img src="/images/icon-arrow-light.svg" alt=""></button>'
}



