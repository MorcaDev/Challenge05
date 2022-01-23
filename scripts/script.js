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
/*          PREVIEW MOBILE-TABLET           */
//////////////////////////////////////////////

let previewImg          = document.getElementById("imagePreview")
let numberPreviewImg    = 1;

let buttonLeft      = document.getElementById("leftButton")
let buttonRight     = document.getElementById("rightButton")

let changeImageMobile = (ev) =>{

    let typeOfClick = ev.target.id

    if (typeOfClick === "leftButton") {
        
        if(numberPreviewImg === 1){
            numberPreviewImg = 4
        }else{
            numberPreviewImg--
        }

    }else if(typeOfClick === "rightButton"){
        
        if(numberPreviewImg === 4){
            numberPreviewImg = 1
        }else{
            numberPreviewImg++
        }

    }else{}

    switch (numberPreviewImg) {
        case 1:
            previewImg.src = "./assets/image-product-1.jpg"
            break;

        case 2:
            previewImg.src = "./assets/image-product-2.jpg"
            break;

        case 3:
            previewImg.src = "./assets/image-product-3.jpg"
            break;

        case 4:
            previewImg.src = "./assets/image-product-4.jpg"
            break;

        default:
            break;
    }   

}

buttonLeft.addEventListener("click", changeImageMobile)
buttonRight.addEventListener("click", changeImageMobile)



//////////////////////////////////////////////
/*           QUANTITY OF PRODUCTS           */
//////////////////////////////////////////////

let moreButton  = document.getElementById("buttonMore")
let lessButton  = document.getElementById("buttonLess")

let numberBox   = document.getElementById("boxNumber")
let numberOfNumberBox = numberBox.textContent

let modifyNumber = (ev) =>{

    let button = ev.target.id
    let quantity = parseInt(numberOfNumberBox)

    if (button === "buttonMore") 
    {   
        quantity++
    }
    else if (button === "buttonLess" && quantity !== 1)
    {   
        quantity-- 
    }
    else
    { 
        console.log('it is not valiable') 
    }

    numberBox.textContent = quantity
    numberOfNumberBox = quantity
}

moreButton.addEventListener("click",modifyNumber)
lessButton.addEventListener("click", modifyNumber)




//////////////////////////////////////////////
/*                  ADD BUTTON              */
//////////////////////////////////////////////

let buttonAdd  = document.getElementById("buttonAdd");

let modifyCart = () =>{

    swal("Good choose", "Thanks for your purchase", "success");
    checkChildren()
}

buttonAdd.addEventListener("click", modifyCart)




//////////////////////////////////////////////
/*            CHECKBOX CONTAIN              */
//////////////////////////////////////////////

let checkBoxContain    = document.getElementById("checkbox-contain")

let fromEmpty = () =>{

    let firstBrother    = 
    `<div class="contain-info">
        <img class="info-image" src="./assets/image-product-1-thumbnail.jpg" alt="snickers which you bough"/>
    
        <div class="info-container">
            <p>Autumn Limited Edition...</p>

            <div class="container-row">
                <h3>$125.00 x <span id="quantityJS">${numberOfNumberBox}</span></h3>
                <h2 id="priceJS">$${numberOfNumberBox*125}</h2>
            </div>   
        </div>

        <button id="delete-contain" class="info-button" alt="to delete your purchase form the cart"></button>
    </div>`;

    let secondBrother   = 
    `<div class="contain-button">
        <button id="check-open">Checkout</button>
    </div>`;

    checkBoxContain.innerHTML = firstBrother + secondBrother

    let trashIcon   = document.getElementById("delete-contain")
    trashIcon.addEventListener("click", deleteCheckBox)

}

let fromFull = () =>{

    let quantity= document.getElementById("quantityJS")    
    quantity.textContent = numberOfNumberBox

    let price   = document.getElementById("priceJS")
    price.textContent = `$${numberOfNumberBox * 125}`

}



//////////////////////////////////////////////
/*       DELETE/REVIEW CHECKBOX             */
//////////////////////////////////////////////

let deleteCheckBox = () =>{

    swal({
        title: "Are you sure?",
        icon: "warning",
        text : "",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) { 
            checkBoxContain.innerHTML = `<h3 id="emptyMessage">Your cart is empty</h3>` 
        } 
        else {

        }
      });
    
}

let checkChildren = ( ) =>{

    let collectionChildrenCheckBox = checkBoxContain.children
    let arrayChildrenCheckBox      = [...collectionChildrenCheckBox]
    let numberOfChildren        = arrayChildrenCheckBox.length
    
    if (numberOfChildren === 1 || numberOfChildren === 0) {
        fromEmpty()

    }else{
        fromFull()
    }


}



//////////////////////////////////////////////
/*              PREVIEW DESKTOP             */
//////////////////////////////////////////////

let optionsPreview = document.getElementById("optionsPreview");

let identifyOption = (ev) =>{
    
    let option = ev.target.id 

    switch (option) {
        case "pv1":
            previewImg.src = "./assets/image-product-1.jpg"
            break;

        case "pv2":
            previewImg.src = "./assets/image-product-2.jpg"
            break;

        case "pv3":
            previewImg.src = "./assets/image-product-3.jpg"
            break;

        case "pv4":
            previewImg.src = "./assets/image-product-4.jpg"
            break;

        default:
            break;
    } 

}

optionsPreview.addEventListener("click", identifyOption)



//////////////////////////////////////////////
/*              OPEN/CLOSE MODAL            */
//////////////////////////////////////////////

let previewBox_MI   = document.getElementById("previewContainer_MI")
let closeButton_MI  = document.getElementById("closeModal_MI")

let previewImg_MI         = document.getElementById("imagePreview_MI")

let closeMI = (ev) => {

    previewBox_MI.classList.remove("main-preview_MI")
    previewImg.src = previewImg_MI.src

}

let openMI = () =>{
    
    previewBox_MI.classList.add("main-preview_MI")
    previewImg_MI.src = previewImg.src

}

let verifySize = (ev) =>{

    if (window.innerWidth >= 768 && window.innerHeight >= 564) {
        
        openMI()

    } else { }

}

previewImg.addEventListener("click",verifySize)
closeButton_MI.addEventListener("click",closeMI)



//////////////////////////////////////////////
/*              RESIZE MODAL                */
//////////////////////////////////////////////

let verifyResize = ( ) => {

    if (window.innerWidth >= 768 && window.innerHeight >= 564) {
        
    } else { 
        previewBox_MI.classList.remove("main-preview_MI")
    }

}

window.addEventListener("resize",verifyResize)


//////////////////////////////////////////////
/*                OPTIONS MODAL             */
//////////////////////////////////////////////

let optionsPreview_MI   = document.getElementById("optionsPreview_MI");

let identifyOptionModale = (ev) =>{
    
    let option = ev.target.id 

    switch (option) {
        case "pv1_MI":
            previewImg_MI.src = "./assets/image-product-1.jpg"
            numberPreviewImg_MI = 1;
            break;

        case "pv2_MI":
            previewImg_MI.src = "./assets/image-product-2.jpg"
            numberPreviewImg_MI = 2;
            break;

        case "pv3_MI":
            previewImg_MI.src = "./assets/image-product-3.jpg"
            numberPreviewImg_MI = 3;
            break;

        case "pv4_MI":
            previewImg_MI.src = "./assets/image-product-4.jpg"
            numberPreviewImg_MI = 4;
            break;

        default:
            break;
    } 

}

optionsPreview_MI.addEventListener("click", identifyOptionModale)