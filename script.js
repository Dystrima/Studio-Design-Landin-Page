/* ///// MODAL ///// */
const button = document.querySelector(".modal-btn");
const modal = document.querySelector(".modalcontainer");
const closeBtn = document.querySelector(".close");

button.addEventListener("click", (e) => {
  modal.style.display = "block";
  document.body.classList.add("noscroll");
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  document.body.classList.remove("noscroll");
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("noscroll");
  }
});

/* ///// FORM VALIDATION ///// */

const form = document.querySelector("form");
const yourname = document.querySelector("#name");
const email = document.querySelector("#email");
const company = document.querySelector("#company");

const form2 = document.querySelector(".newsletter form");
const email2 = document.querySelector(".newsletter #email");

// This is from the Internet to check if the input is an email
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let passName;
let passEmail;
let passCompany;
let passEmail2;

// SUCCESS FUNCTION
function success(e) {
  if (!Array.from(e.classList).includes("success")) {
    e.classList.toggle("success");
  }
  if (Array.from(e.classList).includes("error")) {
    e.classList.toggle("error");
  }

  if (Array.from(e.previousElementSibling.classList).includes("msg")) {
    e.previousElementSibling.classList.toggle("msg");
  }

  if (!Array.from(e.previousElementSibling.classList).includes("success")) {
    e.previousElementSibling.classList.toggle("success");
  }
  if (Array.from(e.previousElementSibling.classList).includes("error")) {
    e.previousElementSibling.classList.toggle("error");
  }

  e.previousElementSibling.innerText = "All good";
}

// ERROR FUNCTION
function error(e) {
  if (Array.from(e.classList).includes("success")) {
    e.classList.toggle("success");
  }
  if (!Array.from(e.classList).includes("error")) {
    e.classList.toggle("error");
  }

  if (Array.from(e.previousElementSibling.classList).includes("msg")) {
    e.previousElementSibling.classList.toggle("msg");
  }

  if (Array.from(e.previousElementSibling.classList).includes("success")) {
    e.previousElementSibling.classList.toggle("success");
  }
  if (!Array.from(e.previousElementSibling.classList).includes("error")) {
    e.previousElementSibling.classList.toggle("error");
  }
}

/* INSIDE MODAL */
form.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the page to submit the form (and therefore refresh the page)

  // NAME
  yourname.addEventListener("change", (e) => {
    if (yourname.value.length >= 3) {
      success(yourname);
      passName = true;
    } else {
      error(yourname);
      yourname.previousElementSibling.innerText =
        "Must be at least 3 characters";
      passName = false;
    }
  });

  // EMAIL
  email.addEventListener("change", (e) => {
    if (email.value.match(validRegex)) {
      success(email);
      passEmail = true;
    } else {
      error(email);
      email.previousElementSibling.innerText =
        "Must be an email adress (eg. name@domain.com)";
      passEmail = false;
    }
  });

  // COMPANY
  company.addEventListener("change", (e) => {
    if (company.value.length >= 3) {
      success(company);
      passCompany = true;
    } else {
      error(company);
      company.previousElementSibling.innerText =
        "Must be at least 3 characters";
      passCompany = false;
    }
  });

  // console.log quand tout est ok
  if (passName && passEmail && passCompany) {
    console.log(yourname.value);
    console.log(email.value);
    console.log(company.value);
  }
});

/* NEWSLETTER */
form2.addEventListener("click", (event) => {
  event.preventDefault();

  // EMAIL
  email2.addEventListener("change", (e) => {
    if (email2.value.match(validRegex)) {
      success(email2);
      passEmail2 = true;
    } else {
      error(email2);
      email2.previousElementSibling.innerText =
        "Must be an email adress (eg. name@domain.com)";
      passEmail2 = false;
    }
  });

  if (passEmail2) {
    console.log(email2.value);
  }
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

/* ///// SWIPER ///// */

/* BRANDS */
const swiper = new Swiper(".mySwiperLogo", {
  loop: true,

  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3.5 },
  },

  autoplay: { delay: 2000 },

  centeredSlides: true,

  spaceBetween: 60,
});

/* CLIENTS */
const swiperImg = new Swiper(".mySwiperImg", {
  loop: true,
  spaceBetween: 100,
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
});

const swiperClients = new Swiper(".mySwiperClients", {
  loop: true,
  spaceBetween: 10,

  allowTouchMove: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  thumbs: {
    swiper: swiperImg,
  },

  autoplay: { delay: 3000 },
});
