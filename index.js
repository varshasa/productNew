
document.addEventListener("DOMContentLoaded", () => {
const products=[
    {title:"laptop" ,imageUrl:"images/electronics.jpg" , price: "$347" , description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} ,
    {title:"Mobilephone" ,imageUrl:"images/electronics.jpg" ,  price: "$147" , description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} ,
    {title:"Headset" , imageUrl:"images/electronics.jpg" , price: "$37" , description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} ,
    {title:"Speaker" , imageUrl:"images/electronics.jpg" , price: "$54" , description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
] ;


const productList = document.getElementById('product-list') ;

products.forEach(product=>{
  //console.log(product.title) ;
 const productDiv = document.createElement('div') ;
 productDiv.className = "card";


productDiv.innerHTML = `

<img src="${product.imageUrl}" alt="${product.title}"></img>
<h2>${product.title}</h2>
<p>${product.price}</p>
<p>${product.description}</p>
`
;
productList.appendChild(productDiv) ;
});

});

let currentIndex = 0;  // Start with the first image

// Function to move the carousel
function moveSlide(direction) {
  const items = document.querySelectorAll('.slide');
  const totalItems = items.length;

  // Update the current index based on the direction
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Update the carousel's transform property to move the slides
  const carousel = document.querySelector('.image');
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
