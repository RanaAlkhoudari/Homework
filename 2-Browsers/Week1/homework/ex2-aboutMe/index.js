'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/


const body = document.querySelector("body");
const nickName = document.getElementById("nickname");
const favFood = document.getElementById("fav-food");
const homeTown = document.getElementById("hometown");
const listItem = document.getElementsByTagName("li");
body.style.fontFamily = "Arial, sans-serif";
nickName.innerText = "Ran";
favFood.innerText = "lasagna";
homeTown.innerText = "Damascus";

listItem.forEach(item => item.className = "list-item");


