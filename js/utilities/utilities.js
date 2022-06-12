// create the header 
const createHeader = () => { 
  let header = document.querySelector(".header");
  header.innerHTML = `
   <div class="container d-flex">
      <div class="logo d-flex">
        <img src="./img/restaurant_on_site_20px.png" alt="" class="logoImg">
        <h2>Awesome</h2>
      </div>
      <div class="navbar">
        <ul class="nav d-flex">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <div class="cartBox">
          <img src="./img/shopping_cart_20px.png" alt="" class="cartImg">
          <li><a class="viewCart" href="#">View Cart</a></li>
          </div>
        </ul>

        <div class="closeImg"></div>
      </div>
      <div class="menuImg"></div>
    </div>
  `;
}
createHeader();

// create newsletter function 
const createNewsLetter = () => { 
  let newsLetter = document.querySelector(".newsletter");
  newsLetter.innerHTML = `
   <div class="container">
    <div class="containerBox d-flex">
      <div class="box">
       <div class="content">
          <h3>Sign Up For Our Daily Newsletter</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste deleniti nostrum enim.</p>
       </div>
      </div>
      <div class="box">
        <div class="content d-flex centered">
          <form action="" class="form d-flex">
            <input type="text" class="textBox" placeholder="You email address">
            <a href=""><button class="btn">Sign Up</button></a>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;
}
createNewsLetter();

// create  footer function 
const createFooter = () => { 
  let footer = document.querySelector(".footer");
  footer.innerHTML = `
   <div class="container">
    <div class="containerBox d-flex">

      <div class="box d-flex">
        <div class="logo d-flex">
          <img src="./img/restaurant_on_site_20px.png" alt="" class="logoImg">
          <h2>Awesome</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
          elit. Porro nesciunt aspernatur facilis, molestias minus 
          magni non doloremque similique aperiam voluptates.</p>

          <div class="sci d-flex">
            <img src="./img/facebook_f_20px.png" alt="">
            <img src="./img/twitter_squared_20px.png" alt="">
            <img src="./img/pinterest_20px.png" alt="">
            <img src="./img/google_20px.png" alt="">
          </div>
      </div>
      <div class="box d-flex">
        <h3>Our Menu</h3>
       <ul class="textBox">
        <li>Dinner</li>
        <li>Dessert</li>
        <li>BreakFast</li>
        <li>Lunches</li>
        <li>Drinkes</li>
       </ul>
      </div>
      <div class="box d-flex">
        <h3>Links</h3>
        <ul class="textBox">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="box d-flex">
        <h3>Contact</h3>
        <ul class="textBox">
          <li><img src="./img/phone_20px.png" alt="">031 454 3444</li>
          <li><img src="./img/envelope_20px.png" alt="">example@awesome.co.za</li>
          <li><img src="./img/marker_20px.png" alt="">Anton Lembede (Smith Street)</li>
        </ul>
      </div>

    </div>
  </div>
  `;
}
createFooter();

// create copyright 
const createCopyRight = () => { 
  let copyRight = document.querySelector(".copyright");
  copyRight.innerHTML = `
   <div class="container">
    <h6>Created By: <span>Nkululeko Mthethwa</span><img src="./img/cool_20px.png" alt="">| &copy;2022 | All Rights Reserved.</h6>
  </div>
  `;
}
createCopyRight();

// creat scroll to top 
const scrollUp = () => {
  let scroll = document.querySelector(".scrollTop")
  scroll.innerHTML = `
  <a href="#"><button class="goTop"></button></a>
  `;
}
scrollUp();

// createCart 
const createCart = () =>{
  let cartContent = document.querySelector(".cartContent");
  cartContent.innerHTML = `
   <h3 class="cartHeading">Your Awesome Cart</h3>
  <div class="content d-flex">

    <div class="box d-flex">
      <div class="imgBox">
        <img src="./img/menu3.png" alt="" class="itemImgs">
      </div>
      <div class="details d-flex">
        <h3>Lorem, ipsum.</h3>
        <div class="price d-flex">
          <h3>R34</h3>
          <img src="./img/remove_20px.png" alt="" class="remove">
        </div>
        <input type="number" value="1" name="" id="" class="number">
      </div>
    </div>
  <div class="box d-flex">
      <div class="imgBox">
        <img src="./img/menu5.png" alt="" class="itemImgs">
      </div>
      <div class="details d-flex">
        <h3>Lorem, ipsum.</h3>
        <div class="price d-flex">
          <h3>R34</h3>
          <img src="./img/remove_20px.png" alt="" class="remove">
        </div>
        <input type="number" value="1" name="" id="" class="number">
      </div>
    </div>
      <div class="box d-flex">
        <div class="imgBox">
          <img src="./img/menu7.png" alt="" class="itemImgs">
        </div>
        <div class="details d-flex">
          <h3>Lorem, ipsum.</h3>
          <div class="price d-flex">
            <h3>R34</h3>
            <img src="./img/remove_20px.png" alt="" class="remove">
          </div>
          <input type="number" value="1" name="" id="" class="number">
        </div>
      </div>


      <span class="line"></span>
      <h3 class="total">R340</h3>
      <div class="buttons">
        <a href="#"><button class="btn">Buy Now</button></a>
      </div>
  </div>
  <img src="./img/delete_20pxb.png" alt="" class="closeCart">
  `;
}
createCart();


// when menu menu button is clicked, show small device navbar
// when close menu button is clicked remove navbar
// when a window is on scroll remove a navbar
// and show scroll button if window height is > 150
let goTop = document.querySelector(".goTop");
let menuImg = document.querySelector(".menuImg");
let closeImg = document.querySelector(".closeImg");
let navbar = document.querySelector(".navbar");
menuImg.onclick = () => { 
  navbar.classList.add("active");
}
closeImg.onclick = () => { 
  navbar.classList.remove("active");
}
window.onscroll = () => { 
   navbar.classList.remove("active");
  if (window.scrollY > 150) {
    goTop.classList.add("active");
  } else {
   goTop.classList.remove("active");}
}

// if navbar link is on click remove a navbar
let menuLinks = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(menuLinks).forEach((item, index) => {
  item.onclick = (e) => {
    let activeMenuLink = document.querySelector(".header .container .navbar .nav li a.active");
    activeMenuLink.classList.remove("active");
    e.target.classList.add("active");
     navbar.classList.remove("active");

  }
})

// when the user moves a mousse over object
// then trigger the function
let allTopsBox = document.querySelectorAll(".tops .container .containerBox .box");
Array.from(allTopsBox).forEach((item, index) => {
  item.onclick = (e) => {
    let activeTops = document.querySelector(".tops .container .containerBox .box.active");
    activeTops.classList.remove("active");
    e.target.classList.add("active");
  }
});

// cart functionality
// view Cart and remove cart
let closeCart = document.querySelector(".closeCart");
let cartContent = document.querySelector(".cartContent");
let cartImg = document.querySelector(".cartImg");
let viewCart = document.querySelector(".viewCart");
cartImg.onclick = () => {
  cartContent.classList.add("active");
}
viewCart.onclick = () => {
  cartContent.classList.add("active");
  navbar.classList.remove("active");
}
closeCart.onclick = () => {
  cartContent.classList.remove("active");
}