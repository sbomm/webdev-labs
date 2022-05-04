/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultButton = () => {
   document.querySelector("body").className = "";
};

const oceanButton = () => {
   document.querySelector("body").className = "ocean";
}

const desertButton = () => {
   document.querySelector("body").className = "desert";
};

const contrastButton = () => {
   document.querySelector("body").className = "high-contrast";
};


document.querySelector("#default").addEventListener('click', defaultButton);
document.querySelector("#ocean").addEventListener('click', oceanButton);
document.querySelector("#desert").addEventListener('click', desertButton);
document.querySelector("#high-contrast").addEventListener('click', contrastButton);