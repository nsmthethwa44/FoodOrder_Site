
  //  Initialize Swiper 
// home slider
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

// specials swiper slides
      var swiper = new Swiper(".mySwiperContainer", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
     1000: {
      slidesPerView: 4,
    },
  },
      });




// filter food menu according to  an onclick button
let allFilterBtns = document.querySelectorAll(".filter span");
let allMenuBox = document.querySelectorAll(".menu .container .containerBox .box");
Array.from(allFilterBtns).forEach((item, index) => {
  item.onclick = (e) => {
let activeFilterBtns = document.querySelector(".filter span.active");
    activeFilterBtns.classList.remove("active");
    e.target.classList.add("active");

    let filter = e.target.dataset.filter
    allMenuBox.forEach(item => { 
      if (item.classList.contains(filter)) { 
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    })
  }
})


// filter item boxes
// using a dropdown
down = document.querySelector(".down");
down.oninput = () => { 
  let filter = down.value.toLowerCase();
  allMenuBox.forEach(item => { 
    let dataSearch = item.getAttribute("data-search");
    if (dataSearch.indexOf(filter) > -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  })
}