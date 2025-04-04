const swiper = new Swiper('.swiperSlider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper2 = new Swiper(".catSwiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    },
  }
});

const swiper3 = new Swiper(".blogSwiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    },
  }
});

const swiper4 = new Swiper(".doitacSwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 7,
      spaceBetween: 16
    },
  }
});
const openMenu = () => {
  const el = document.querySelector('.menu-mobie')
  el.classList.add('active')
}
const closeMenu = () => {
  const el = document.querySelector('.menu-mobie')
  el.classList.remove('active')
}
function scrollToHeader() {
  console.log("object");
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}

function openTab(event, tabId) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function openTab2(event, tabId) {
  document.querySelectorAll('.tab-content2').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab2').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}