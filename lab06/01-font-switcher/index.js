const makeBigger = () => {
   const currentFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   document.querySelector(".content").style.fontSize = parseFloat(currentFontSize) + 5 + 'px';

   const currentFontSizeH1 = window.getComputedStyle(document.querySelector("h1")).fontSize;
   document.querySelector("h1").style.fontSize = parseFloat(currentFontSizeH1) + 5 + 'px';
};

const makeSmaller = () => {
   const currentFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   document.querySelector(".content").style.fontSize = parseFloat(currentFontSize) - 5 + 'px';

   const currentFontSizeH1 = window.getComputedStyle(document.querySelector("h1")).fontSize;
   document.querySelector("h1").style.fontSize = parseFloat(currentFontSizeH1) - 5 + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

