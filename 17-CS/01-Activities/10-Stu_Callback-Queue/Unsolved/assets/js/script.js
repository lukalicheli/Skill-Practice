// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
  // get the current time
  const startTime = new Date().getTime();
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

pause(8000);

// remove the class that hides the element
document.querySelector('form button').classList.remove('display-none');
