'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.getElementById("logo");
  logo.src = "https://cdn.oneworld.nl/app/uploads/2017/09/06123153/Logo-hack-your-future.jpg";
  logo.srcset = "https://cdn.oneworld.nl/app/uploads/2017/09/06123153/Logo-hack-your-future.jpg 2x, https://cdn.oneworld.nl/app/uploads/2017/09/06123153/Logo-hack-your-future.jpg 3x"
}

hijackGoogleLogo();
