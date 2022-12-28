document.querySelector('.Sides').style.display='none';
document.querySelector('.Angles').style.display='none';
document.querySelector('.Triangle').addEventListener('click', showBtn); 
 
function showBtn(e) { 
 document.querySelector('.Sides').style.display = 'block'; 
 document.querySelector('.Angles').style.display = 'block';
 e.preventDefault(); 
} 
