const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const watchCatWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';
};

setInterval(watchCatWalk, 10);

