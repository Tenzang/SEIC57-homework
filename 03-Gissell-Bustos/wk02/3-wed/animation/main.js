 alert('hi');
 
 const catImg = document.getElementsByTagName('img')[0];
 catImg.style.position = 'absolute';
 catImg.style.left = '0px';


function catWalk() {
  let initialPosition =  parseInt(catImg.style.left);
  console.log(initialPosition);
  let newPosition = initialPosition + 1;
  console.log(newPosition + 'px');
  catImg.style.left = newPosition + 'px';
}

// catWalk();
// setInterval(catWalk, 10);

