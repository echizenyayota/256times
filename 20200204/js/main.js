"use strict"; 
{
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  let i = 0

  box1.addEventListener('click', () => {
      box1.style.background = 'orange';
  }); 

  box2.addEventListener('click', () => {
    box2.textContent = i++;
  });

  box3.addEventListener('click', () => {
    
  });




}