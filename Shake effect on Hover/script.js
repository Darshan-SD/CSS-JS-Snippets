document.getElementById('shakeButton').addEventListener('click', function() {
    const text = document.querySelector('.shake');
    text.classList.add('shake-animation');
  
    // Remove the class after the animation ends to allow for retriggering
    setTimeout(() => {
      text.classList.remove('shake-animation');
    }, 500); // Duration should match the animation duration
  });
  