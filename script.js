let navbar = document.querySelector('.navbar');  //It can merge the navbar icons in a single bar/menu-btn that navbar works 
                                                  // for seeing the icons of navbar
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}                 

let searchForm = document.querySelector('.search-form');  // Get search down when we click on the search btn.

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container'); //// Opens Cart items when we click on the cart btn.

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');  // Bars should be closed when we scroll down.
    searchForm.classList.remove('active'); // search bar is also be closed when we scroll down.
    cartItem.classList.remove('active');  // Cart items also be closed when we scroll down.
}
