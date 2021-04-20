/**function productButton() {
    navMenu1.style.display = "flex"
    document.getElementsById('firstMenuItem').innerHTML = '<button type="button" class="main-menu-btn" onclick="productButtonAtivado()">Product<img src="/images/icon-arrow-light.svg" alt=""></button>'
}

function productButtonAtivado() {
    navMenu1.style.display = "none"
    document.getElementsById('firstMenuItem').innerHTML = '<button type="button" class="main-menu-btn" onclick="productButton()">Product<img src="/images/icon-arrow-light.svg" alt=""></button>'
}**/

function productButton() {
    let navi = document.querySelector('.hidden-menu')
    navi.classList.toggle('active')
}


function productButton1() {
    let navi = document.querySelector('.hidden-menu1')
    navi.classList.toggle('active1')
}



function productButton2() {
    let navi = document.querySelector('.hidden-menu2')
    navi.classList.toggle('active2')
}


window.onclick = function(event) {
    if (!event.target.matches('.main-menu-btn')) {
      let dropdowns = document.getElementsByClassName("hidden-menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }

    if (!event.target.matches('.main-menu-btn1')) {
        let dropdowns = document.getElementsByClassName("hidden-menu1");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('active1')) {
            openDropdown.classList.remove('active1');
          }
        }
      }

    if (!event.target.matches('.main-menu-btn2')) {
        let dropdowns = document.getElementsByClassName("hidden-menu2");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active2')) {
               openDropdown.classList.remove('active2');
            }
        }
    }  
  }



