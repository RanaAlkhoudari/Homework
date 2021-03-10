'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/
const image = document.querySelector('img');
image.style.left = '0px';
const body = document.querySelector('body');
const maxDist = body.offsetWidth - image.offsetWidth;
let position = 0;
let hasDanced = false;
function catWalk() {
  const walking = setInterval(function () {
    position += 10;
    image.style.left = position + 'px';
    if (position > maxDist) {
      position = 0;
      hasDanced = false;
    } else if (!hasDanced && position >= maxDist / 2) {
      clearInterval(walking);
      const savedSrc = image.src;
      image.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
      setTimeout(() => {
        hasDanced = true;
        image.src = savedSrc;
        catWalk();
      }, 5000);
    }
  }, 50);
}

window.addEventListener('load', catWalk);
