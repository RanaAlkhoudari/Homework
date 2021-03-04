'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  setInterval(() => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.body.innerHTML = `<div style = font-size:30px>${currentTime} </div>`;
  }, 1000);
}
window.addEventListener('load', addCurrentTime);
