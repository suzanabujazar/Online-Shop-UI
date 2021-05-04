//Variables
let numOfHeartedItems=0
let numOfCartItems=0
let total=0
//Selectors
const tabs=document.querySelectorAll(".tab")
const items=document.querySelectorAll(".items")
const fashionItems=document.querySelector(".fashion-items")
const homeItems=document.querySelector(".home-items")
const burger=document.querySelector(".burger")

const notifBall=document.querySelector(".notif-ball-hearts")
notifBall.innerHTML=`${numOfHeartedItems}`;

const notifBallCart=document.querySelector(".notif-ball-cart")
notifBallCart.innerHTML=`${numOfCartItems}`;

const categoriesList=document.querySelector(".categories-list")
const navlinks=document.querySelectorAll(".categories-list li");
const heartButtons=document.querySelectorAll(".heart-btn")

const body=document.querySelector(".overlay-container")
const numCartItems=document.querySelector("#numCartItems")
numCartItems.innerHTML=`${numOfCartItems}`;
const shoppingBag=document.querySelector(".fa-shopping-bag")
const shoppingList=document.querySelector(".shopping-list")
const cartItems=document.querySelector(".cart-items")

const totalContainer=document.querySelector(".total")
const addToCartButtons=document.querySelectorAll(".add-to-cart")

//Tab switching
tabs.forEach(tab => tab.addEventListener('click',()=> {
    tabs.forEach(tab=>tab.classList.remove("active"))
    tab.classList.add("active")  
    if (tab.classList.contains("active")) {
        if (tab.id==="fashion")
        {
          items.forEach(item => item.classList.remove('show-items'))
          fashionItems.classList.add("show-items")
        }
        else
        if (tab.id==="home")
        {
            items.forEach(item => item.classList.remove('show-items'))
            homeItems.classList.add("show-items")
        }
        else
        if (tab.id==="lifestyle")
        {
            items.forEach(item => item.classList.remove('show-items'))
        }
    }
}))

//Hamburger Menu
burger.addEventListener('click',()=>{
    categoriesList.classList.toggle("opened")
    navlinks.forEach((li,index) =>{ 
        if (li.style.animation) 
            li.style.animation=''
        else {
        li.style.animation=`fade 0.3s forwards ease ${index/7 +0.3}s`;
        }   
    })
    navlinks.forEach(link => link.addEventListener('click',()=>{
        categoriesList.classList.toggle("opened")
        navlinks.forEach((li,index) =>{
            if (li.style.animation) 
                li.style.animation=''
            else {
            li.style.animation=`fade 0.3s forwards ease ${index/7 +0.3}s`;
            }        
        })
        burger.classList.toggle("clicked")
    }))  
   burger.classList.toggle("clicked")
});
if (numOfHeartedItems===0)
{
    notifBall.style.display="none"
}
//Heart an item
heartButtons.forEach(heartButton => heartButton.addEventListener('click',()=>{
    heartButton.classList.toggle("far")
    heartButton.classList.toggle("fas")
    if (heartButton.classList.contains("far"))
   {
        numOfHeartedItems--;
        if (numOfHeartedItems===0)
         notifBall.style.display="none"
        else
        if (numOfHeartedItems>0)
        notifBall.style.display="flex"
        notifBall.innerHTML=`${numOfHeartedItems}`;   
   }
    else  
    if(heartButton.classList.contains("fas"))
   {
        numOfHeartedItems++;
        if (numOfHeartedItems===0)
        {
            notifBall.style.display="none"
        }
        else
        if (numOfHeartedItems>0) {
            notifBall.style.display="flex"
        }
        notifBall.innerHTML=`${numOfHeartedItems}`;
   }
}))
if (numOfCartItems===0)
{
    notifBallCart.style.display="none"
}

addToCartButtons.forEach(addToCartButton => addToCartButton.addEventListener('click',(e)=>{
if (addToCartButton.innerHTML==="Add to Cart") {
    addToCartButton.innerHTML="<i class='fas fa-check'></i> Added to Cart"
    numOfCartItems++;
/* Adding item to cart */
const newItemCard=document.createElement("div")
const imgSrc=e.target.previousElementSibling.src;
const itemName=e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.textContent;
const itemPrice=e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent;
newItemCard.classList.add("cart-item-card")
newItemCard.innerHTML=`<img src="${imgSrc}"><div class="cart-item-info"><p>${itemName}</p><p>${itemPrice}</p></div><i class="fas fa-trash"></i>`
itemPriceValue=parseInt(itemPrice.slice(2, itemPrice.length))
total+=itemPriceValue
totalContainer.innerHTML=`&#8362; ${total}`

/*removing an item */
newItemCard.addEventListener('click',(e)=>{
    if (e.target.classList.contains("fa-trash")) {
       priceStr=e.target.previousElementSibling.lastElementChild.innerHTML;

       price=parseInt(priceStr.slice(2, priceStr.length))
       e.target.parentElement.remove();
       numOfCartItems--;
       total-=price
       totalContainer.innerHTML=`₪ ${total}`
       numCartItems.innerHTML=`${numOfCartItems}`;
       notifBallCart.innerHTML=`${numOfCartItems}`;
       if (numOfCartItems===0)
{
    notifBallCart.style.display="none"
}
       addToCartButton.innerHTML="Add to Cart"
    }
})

cartItems.append(newItemCard)
    if (numOfCartItems===0)
    {
        notifBallCart.style.display="none"
    }
    else
    if (numOfCartItems>0) {
        notifBallCart.style.display="flex"
    }
    notifBallCart.innerHTML=`${numOfCartItems}`;
    numCartItems.innerHTML=`${numOfCartItems}`;
}
}))

shoppingBag.addEventListener('click',()=>{
    shoppingList.classList.add("opened-shopping-list")
    body.classList.add("overlay")
})

const closeButton=document.querySelector(".close-btn")
closeButton.addEventListener('click',()=>{
    shoppingList.classList.remove("opened-shopping-list")
    body.classList.remove("overlay")
})

body.addEventListener('click',()=>{
    shoppingList.classList.remove("opened-shopping-list")
    body.classList.remove("overlay")
})