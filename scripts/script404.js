//////////////////////////////////////////////
/*         OPEN/CLOSE BURGER MENU           */
//////////////////////////////////////////////

let navMenu  = document.getElementById("nav-sections");
let navLeft  = document.getElementById("nav-menu_brand");
let navRight = document.getElementById("nav-cart_user");

let openMenu    = document.getElementById("burger-open");
let closeMenu   = document.getElementById("burger-close");

let containerMain   = document.querySelector("main");

let burgerMenu = (ev) =>{

    let cssShowMenu = "show-nav-sections";
    navMenu.classList.toggle(cssShowMenu)

}

openMenu.addEventListener("click",burgerMenu)
closeMenu.addEventListener("click",burgerMenu)


//////////////////////////////////////////////
/*           OPEN/CLOSE  CHECKBOX           */
//////////////////////////////////////////////

let cartBox     = document.getElementById("checkbox");
let cartButton  = document.getElementById("cart-open");

let cartSquare = (ev) =>{

    let cssShowMenu = "show-checkbox"
    cartBox.classList.toggle(cssShowMenu)

}

cartButton.addEventListener("click",cartSquare)


//////////////////////////////////////////////
/*                  TYPED JS                */
//////////////////////////////////////////////

let options = {
  strings       : [
    'We still <br/> working on it'
  ],
  contentType : 'html', 
  startDelay  : 300,
  backDelay   : 450,
  typeSpeed   : 100,
  backSpeed   : 75

};

const typed = new Typed('.typed', options);
