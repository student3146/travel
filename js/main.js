if (typeof require !== 'undefined') {
    var customSelect = require("custom-select").default;
    require("./node_modules/custom-select/build/custom-select.css");
  }
  
  const mySelects = customSelect("select");
  
  console.log(mySelects);

  const menuBtn = document.querySelector('.menu-btn');
  const menuMobile = document.querySelector('.menu-mobile');
  const headerForm = document.querySelector('.header__form')

  menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
})
